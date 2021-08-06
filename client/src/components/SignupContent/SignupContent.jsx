import React from "react";
import { Link } from "react-router-dom";
import "./SignupContent.css";

function SignupContent(props) {
  return (
    <section id="signup_content">
      <div className="row">
        <h4 className="title">Signup</h4>
        <form className="col s12 m8">
          <div className="input-field col s12">
            <i className="material-icons prefix">person</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Fullname</label>
          </div>
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
              to="/login"
              className="blue-text text-darken-3 left login-link"
            >
              Already hava an account ? Login
            </Link>
            <button
              type="submit"
              href="./"
              className="waves-effect waves-light btn right"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignupContent;
