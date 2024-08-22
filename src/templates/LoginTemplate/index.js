import React from "react";
import "./styles.css";
import logo from "../../img/Logo__1_-removebg-preview.png";
import { Container } from "react-bootstrap";
import { LoginOrganism } from "../../organisms/LoginOrganism";

export const LoginTemplate = () => {
  return (
    <Container fluid className="login-box">
      <img src={logo} alt="Company Logo" className="logo" />
      <LoginOrganism />
    </Container>
  );
};
