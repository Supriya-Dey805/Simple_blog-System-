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
  Col
} from "reactstrap";

import Base from "../components/Base";

const Signup = () => {

  const navigate = useNavigate();

  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    about: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", data);

      setPopup(true);

      setTimeout(() => {
        setPopup(false);
        navigate("/login");
      }, 2000);

    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <Base>

      <div style={styles.wrapper}>

        <Container>

          <Row className="justify-content-center">

            <Col md="6">

              <Card style={styles.card}>

                <CardHeader style={styles.header}>
                  Create Account
                </CardHeader>

                <CardBody>

                  <p style={styles.subtitle}>
                    Start your blogging journey today
                  </p>

                  <Form onSubmit={handleSubmit}>

                    <FormGroup>
                      <Label style={styles.label}>
                        Username
                      </Label>
                      <Input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        style={styles.input}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={styles.label}>
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        style={styles.input}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={styles.label}>
                        Password
                      </Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        style={styles.input}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label style={styles.label}>
                        About You
                      </Label>
                      <Input
                        type="textarea"
                        id="about"
                        placeholder="Tell something about yourself..."
                        style={styles.textarea}
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <Button
                      type="submit"
                      style={styles.button}
                    >
                      Register
                    </Button>

                  </Form>

                  <p style={styles.loginText}>
                    Already have an account?
                    <Link to="/login" style={styles.link}>
                      Login
                    </Link>
                  </p>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

        {
          popup && (
            <div style={styles.popup}>
              Registration Successful
            </div>
          )
        }

      </div>

    </Base>
  );
};

const styles = {

  wrapper: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px"
  },

  card: {
    borderRadius: "25px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    boxShadow: "0px 15px 40px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  header: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "25px",
    color: "white",
    background: "transparent",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  },

  subtitle: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: "30px"
  },

  label: {
    color: "white",
    fontWeight: "600",
    marginBottom: "8px"
  },

  input: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    marginTop: "8px"
  },

  textarea: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    height: "120px",
    marginTop: "8px"
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(to right, #38bdf8, #6366f1)",
    color: "white",
    fontWeight: "bold",
    fontSize: "17px",
    marginTop: "20px"
  },

  loginText: {
    textAlign: "center",
    marginTop: "25px",
    color: "#cbd5e1"
  },

  link: {
    marginLeft: "8px",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold"
  },

  popup: {
    position: "fixed",
    top: "25px",
    right: "25px",
    background: "#22c55e",
    color: "white",
    padding: "15px 25px",
    borderRadius: "12px",
    fontWeight: "bold",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.3)"
  }
};

export default Signup;