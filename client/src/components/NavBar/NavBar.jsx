import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src="logo512.png" alt="Shop.In" width="50" />
            <span className="logo-text">Shop.In</span>
          </Link>
          <a href="./" data-target="mob-sidenav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/chackout">Checkout</Link>
            </li>
            <li>
              <a
                className="dropdown-trigger btn"
                href="./"
                data-target="dropdown1"
              >
                <i className="material-icons left">person</i>
                Muhammed Rahif
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="dropdown1" className="dropdown-content">
                <li>
                  <a href="./">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a href="./">Logout</a>
        </li>
      </ul>
      <ul className="sidenav" id="mob-sidenav">
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/chackout">Checkout</Link>
        </li>
        <li>
          <a className="dropdown-trigger btn" href="./" data-target="dropdown2">
            <i className="material-icons left">person</i>
            Muhammed Rahif
            <i className="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
