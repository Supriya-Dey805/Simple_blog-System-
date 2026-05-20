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

const Signup = () => {

  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  // NEW → state
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
        navigate("/login"); // go to login after signup
      }, 2000);

    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <Base>
      <div style={{minHeight:"100vh",background:"linear-gradient(to right, #141e30, #243b55)",paddingTop:"30px",paddingBottom:"30px"}}>
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card style={{borderRadius:"20px",overflow:"hidden",boxShadow:"0px 8px 25px rgba(0,0,0,0.4)",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(10px)",color:"white"}}>
                <CardHeader className="text-center" style={{fontSize:"28px",fontWeight:"bold",background:"transparent",borderBottom:"1px solid rgba(255,255,255,0.2)"}}>
                  🚀 Create Your Account
                </CardHeader>

                <CardBody>
                  <p className="text-center" style={{ color: "#ddd" }}>Join our community today</p>

                  <Form onSubmit={handleSubmit}>

                    <FormGroup>
                      <Label>Username</Label>
                      <Input type="text" id="username" style={styles.input} onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <Label>Email</Label>
                      <Input type="email" id="email" style={styles.input} onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <Label>Password</Label>
                      <Input type="password" id="password" style={styles.input} onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <Label>About</Label>
                      <Input type="textarea" id="about" style={{...styles.input,height:"150px"}} onChange={handleChange}/>
                    </FormGroup>

                    <Container className="text-center">
                      <Button color="success" type="submit" style={styles.button}>Register</Button>
                    </Container>

                  </Form>

                  {/* NEW → link to login */}
                  <p style={{textAlign:"center",marginTop:"20px"}}>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        {popup && (<div style={styles.popup}>✅ Registration Successful!</div>)}
      </div>
    </Base>
  );
};

const styles = {
  input:{borderRadius:"10px",padding:"12px",border:"none",marginTop:"5px"},
  button:{borderRadius:"10px",padding:"10px 25px",fontWeight:"bold"},
  popup:{position:"fixed",top:"30px",right:"30px",background:"#00c851",color:"white",padding:"15px 25px",borderRadius:"10px",boxShadow:"0px 4px 12px rgba(0,0,0,0.3)",fontWeight:"bold",zIndex:999}
};

export default Signup;