import React from "react";
import { Link } from "react-router-dom";
import "./LoginContent.css";

function LoginContent(props) {
  return (
    <section id="login_content">
      <div className="row">
        <h4 className="title">Login</h4>
        <form className="col s12 m8">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Email</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label htmlFor="icon_telephone">Password</label>
          </div>
          <div className="bottom-part">
            <Link
              to="/signup"
              className="blue-text text-darken-3 left signup-link"
            >
              Don't have account ? Signup
            </Link>
            <a href="./" className="waves-effect waves-light btn right">
              Login
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginContent;
