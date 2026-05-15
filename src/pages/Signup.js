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

const Signup = () => {

  const [popup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  return (
    <Base>

      {/* Background Style */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #141e30, #243b55)",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >

        <Container>

          <Row className="mt-4">

            <Col sm={{ size: 6, offset: 3 }}>

              <Card
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                }}
              >

                {/* Card Header */}
                <CardHeader
                  className="text-center"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    background: "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  🚀 Create Your Account
                </CardHeader>

                <CardBody>

                  <p
                    className="text-center"
                    style={{ color: "#ddd" }}
                  >
                    Join our community today
                  </p>

                  {/* Form */}
                  <Form onSubmit={handleSubmit}>

                    {/* Username */}
                    <FormGroup>
                      <Label for="username">Username</Label>

                      <Input
                        type="text"
                        placeholder="Enter username"
                        id="username"
                        style={styles.input}
                      />
                    </FormGroup>

                    {/* Email */}
                    <FormGroup>
                      <Label for="email">Email</Label>

                      <Input
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        style={styles.input}
                      />
                    </FormGroup>

                    {/* Password */}
                    <FormGroup>
                      <Label for="password">Password</Label>

                      <Input
                        type="password"
                        placeholder="Enter password"
                        id="password"
                        style={styles.input}
                      />
                    </FormGroup>

                    {/* About */}
                    <FormGroup>
                      <Label for="about">About</Label>

                      <Input
                        type="textarea"
                        placeholder="Tell something about yourself..."
                        id="about"
                        style={{
                          ...styles.input,
                          height: "150px",
                        }}
                      />
                    </FormGroup>

                    {/* Unique Idea */}
                    <div
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        padding: "10px",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        textAlign: "center",
                      }}
                    >
                      💡 Tip: Use a strong password with symbols & numbers
                    </div>

                    {/* Buttons */}
                    <Container className="text-center">

                      <Button
                        color="success"
                        type="submit"
                        style={styles.button}
                      >
                        Register
                      </Button>

                      <Button
                        color="danger"
                        type="reset"
                        className="ms-3"
                        style={styles.button}
                      >
                        Reset
                      </Button>

                    </Container>

                  </Form>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Popup Message */}
        {popup && (
          <div style={styles.popup}>
            ✅ Registration Successful!
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
    transition: "0.3s",
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

export default Signup;