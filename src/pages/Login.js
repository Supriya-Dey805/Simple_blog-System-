import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

import Base from "../components/Base";

const Login = () => {

  const navigate = useNavigate();

  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.id]: e.target.value
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/login", data);
      console.log(res.data);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "username",
        res.data.user?.username || "Sup"
      );

      setPopup(true);

      setTimeout(() => {

        setPopup(false);

        navigate("/home");

      }, 2000);

    } catch (err) {

      console.log(err);

      alert("Invalid credentials");
    }
  };

  return (

    <Base>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >

        <Container>

          <Row className="justify-content-center">

            <Col lg="5" md="7">

              <Card
                style={{
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.45)",
                  overflow: "hidden"
                }}
              >

                <CardHeader
                  className="text-center"
                  style={{
                    background: "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "35px 20px"
                  }}
                >

                  <h1
                    style={{
                      fontWeight: "bold",
                      fontSize: "38px",
                      marginBottom: "10px",
                      letterSpacing: "1px"
                    }}
                  >
                    🔐 Welcome Back
                  </h1>

                  <p
                    style={{
                      color: "#cbd5e1",
                      marginBottom: "0px",
                      fontSize: "16px"
                    }}
                  >
                    Login to continue your blogging journey
                  </p>

                </CardHeader>

                <CardBody style={{ padding: "35px" }}>

                  <Form onSubmit={handleLogin}>

                    
                    <FormGroup style={{ marginBottom: "25px" }}>

                      <Label
                        style={{
                          marginBottom: "10px",
                          fontWeight: "600",
                          color: "#e2e8f0"
                        }}
                      >
                        Email Address
                      </Label>

                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        style={styles.input}
                        onChange={handleChange}
                        required
                      />

                    </FormGroup>

                    <FormGroup style={{ marginBottom: "25px" }}>

                      <Label
                        style={{
                          marginBottom: "10px",
                          fontWeight: "600",
                          color: "#e2e8f0"
                        }}
                      >
                        Password
                      </Label>

                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        style={styles.input}
                        onChange={handleChange}
                        required
                      />

                    </FormGroup>


                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "30px",
                        fontSize: "14px",
                        color: "#cbd5e1"
                      }}
                    >

                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer"
                        }}
                      >
                        <input type="checkbox" />
                        Remember Me
                      </label>

                      <a
                        href="/"
                        style={{
                          color: "#38bdf8",
                          textDecoration: "none",
                          fontWeight: "600"
                        }}
                      >
                        Forgot Password?
                      </a>

                    </div>

                    <Button
                      type="submit"
                      style={styles.loginButton}
                    >
                      🚀 Login
                    </Button>


                    <Button
                      color="light"
                      className="ms-3"
                      style={styles.button}
                      onClick={() => alert("Google Login Coming Soon")}
                    >
                      Continue with Google
                    </Button>

                  </Form>


                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "28px",
                      color: "#cbd5e1"
                    }}
                  >

                    New user?{" "}

                    <Link
                      to="/signup"
                      style={{
                        color: "#38bdf8",
                        fontWeight: "bold",
                        textDecoration: "none"
                      }}
                    >
                      Create account
                    </Link>

                  </div>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

        {popup && (

          <div style={styles.popup}>
            ✅ Login Successful!
          </div>

        )}

      </div>

    </Base>
  );
};

const styles = {

  input: {

    borderRadius: "14px",

    padding: "14px",

    border: "1px solid rgba(255,255,255,0.15)",

    background: "rgba(255,255,255,0.08)",

    color: "white",

    fontSize: "15px",

    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)"
  },

  loginButton: {

    width: "100%",

    border: "none",

    borderRadius: "14px",

    padding: "14px",

    fontWeight: "bold",

    fontSize: "16px",

    background: "linear-gradient(to right, #06b6d4, #3b82f6)",

    marginBottom: "18px",

    boxShadow: "0px 8px 20px rgba(59,130,246,0.4)"
  },

  googleButton: {

    width: "100%",

    border: "none",

    borderRadius: "14px",

    padding: "14px",

    fontWeight: "bold",

    fontSize: "16px",

    background: "white",

    color: "#111",

    boxShadow: "0px 4px 12px rgba(255,255,255,0.15)"
  },

  popup: {

    position: "fixed",

    top: "30px",

    right: "30px",

    background: "#22c55e",

    color: "white",

    padding: "16px 26px",

    borderRadius: "14px",

    boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",

    fontWeight: "bold",

    zIndex: 999
  }
};

export default Login;