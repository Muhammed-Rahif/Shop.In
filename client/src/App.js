import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { AutoInit } from "materialize-css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FullScreenLoading from "./components/FullScreenLoading/FullScreenLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      AutoInit();
      setLoading(false);
    };
  }, []);

  return (
    <Router>
      <FullScreenLoading active={loading} />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
