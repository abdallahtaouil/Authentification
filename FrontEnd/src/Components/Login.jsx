import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./ComponentStyle.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../redux/Actions/Action";

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const HandleLogin=()=>{
    dispatch(LoginAction({email,password},Navigate))
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "30rem",
          marginTop: "200px",
          backgroundColor: "rgba(0, 126, 127, 0.75)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#FFF7D6",
            }}
          >
            <h1>Connexion </h1>
          </Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#FFF7D6", fontSize: "25px" }}>
                Nom d'utlisateur
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Taper votre Nom d'utilisateur"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#FFF7D6", fontSize: "25px" }}>
                Mot de passe
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Taper votre mot de passe"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Button className="validation-btn-connexion" onClick={HandleLogin}>Se connecter</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
