import React from "react";
import Footer from "../components/Footer/Footer";
import LoginContent from "../components/LoginContent/LoginContent";
import NavBar from "../components/NavBar/NavBar";

function Login(props) {
  return (
    <>
      <NavBar />
      <LoginContent />
      <Footer />
    </>
  );
}

export default Login;
