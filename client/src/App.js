import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { AutoInit } from "materialize-css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AutoInit();
  }, []);

  return (
    <Router>
      <div className="body">
        <Switch>
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
