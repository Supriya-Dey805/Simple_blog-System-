const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  try {
    const { username, email, password, about } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email and password are required." });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) return res.status(409).json({ message: "An account with this email already exists." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username: username.trim(), email: normalizedEmail, password: hashedPassword, about });
    return res.status(201).json({ message: "Account created successfully.", user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Could not create the account." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) return res.status(401).json({ message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password." });

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing from server environment.");
      return res.status(500).json({ message: "Server authentication is not configured." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email, about: user.about }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Login failed. Please try again." });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Please enter your email address." });

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    // Same response for existing and non-existing accounts to avoid account discovery.
    const genericMessage = "If an account exists for that email, a password reset link has been sent.";
    if (!user) return res.status(200).json({ message: genericMessage });

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM) {
      return res.status(503).json({ message: "Password reset email is not configured. Add the SMTP settings to server/.env." });
    }

    const rawToken = crypto.randomBytes(32).toString("hex");
    user.passwordResetToken = crypto.createHash("sha256").update(rawToken).digest("hex");
    user.passwordResetExpires = Date.now() + 15 * 60 * 1000;
    await user.save();

    const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:3000").replace(/\/$/, "");
    const resetUrl = `${frontendUrl}/reset-password/${rawToken}`;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: user.email,
        subject: "Reset your SmartBlog password",
        text: `Use this link to reset your SmartBlog password. It expires in 15 minutes: ${resetUrl}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:28px;color:#172033"><h2>Reset your password</h2><p>We received a request to reset your SmartBlog password.</p><p><a href="${resetUrl}" style="display:inline-block;padding:13px 22px;background:#635bff;color:#fff;text-decoration:none;border-radius:8px">Reset password</a></p><p>This link expires in 15 minutes. If you did not request this, you can ignore this email.</p></div>`
      });
    } catch (mailError) {
      user.passwordResetToken = null;
      user.passwordResetExpires = null;
      await user.save();
      console.error("Reset email error:", mailError);
      return res.status(502).json({ message: "Could not send the reset email. Check your SMTP settings." });
    }

    return res.status(200).json({ message: genericMessage });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ message: "Could not process the password reset request." });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 8) {
      return res.status(400).json({ message: "New password must be at least 8 characters." });
    }

    const hashedToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
    if (!user) return res.status(400).json({ message: "This reset link is invalid or has expired. Request a new one." });

    user.password = await bcrypt.hash(password, 12);
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully. You can now log in." });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ message: "Could not reset the password." });
  }
};
