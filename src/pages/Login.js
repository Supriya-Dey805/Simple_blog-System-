import React, { useState } from "react";

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

  const [popup, setPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  return (
    <Base>

      {/* Background */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >

        <Container>

          <Row className="mt-5">

            <Col sm={{ size: 5, offset: 3 }}>

              <Card
                style={{
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  color: "white",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
                  overflow: "hidden",
                }}
              >

                {/* Header */}
                <CardHeader
                  className="text-center"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  🔐 Welcome Back
                </CardHeader>

                <CardBody>

                  <p
                    className="text-center"
                    style={{
                      color: "#ddd",
                      marginBottom: "25px",
                    }}
                  >
                    Login to continue your journey
                  </p>

                  {/* Login Form */}
                  <Form onSubmit={handleLogin}>

                    {/* Email */}
                    <FormGroup>

                      <Label for="email">
                        Email
                      </Label>

                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        style={styles.input}
                      />

                    </FormGroup>

                    {/* Password */}
                    <FormGroup>

                      <Label for="password">
                        Password
                      </Label>

                      <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        style={styles.input}
                      />

                    </FormGroup>

                    {/* Unique Idea */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        fontSize: "14px",
                      }}
                    >
                      <label>
                        <input type="checkbox" /> Remember Me
                      </label>

                      <a
                        href="/"
                        style={{
                          color: "#00d4ff",
                          textDecoration: "none",
                        }}
                      >
                        Forgot Password?
                      </a>
                    </div>

                    {/* Login Button */}
                    <Container className="text-center">

                      <Button
                        color="primary"
                        type="submit"
                        style={styles.button}
                      >
                        Login
                      </Button>

                      <Button
                        color="light"
                        className="ms-3"
                        style={styles.button}
                      >
                        Continue with Google
                      </Button>

                    </Container>

                  </Form>

                  {/* Extra Feature */}
                  <div
                    style={{
                      marginTop: "25px",
                      textAlign: "center",
                      color: "#ccc",
                    }}
                  >
                    ✨ Secure Login System with Stylish UI
                  </div>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Popup */}
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
    borderRadius: "10px",
    padding: "12px",
    border: "none",
    marginTop: "5px",
  },

  button: {
    borderRadius: "10px",
    padding: "10px 25px",
    fontWeight: "bold",
  },

  popup: {
    position: "fixed",
    top: "30px",
    right: "30px",
    background: "#00c851",
    color: "white",
    padding: "15px 25px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    fontWeight: "bold",
    zIndex: 999,
  },
};

export default Login;