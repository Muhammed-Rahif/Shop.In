import React from "react";
import Footer from "../components/Footer/Footer";
import HomeContent from "../components/HomeContent/HomeContent";
import NavBar from "../components/NavBar/NavBar";

function Home(props) {
  return (
    <>
      <NavBar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default Home;
