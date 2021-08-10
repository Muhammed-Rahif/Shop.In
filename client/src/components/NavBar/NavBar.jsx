import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { SearchProductContext } from "../../contexts/Contexts";

function NavBar(props) {
  const { searchProduct, setSearchProduct } = useContext(SearchProductContext);

  return (
    <>
      <div className="navbar-fixed">
        <nav id="navbar">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img src="logo512.png" alt="Shop.In" width="50" />
              <span className="logo-text">Shop.In</span>
            </Link>
            <a href="./" data-target="mob_sidenav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <div className="search-bar left">
                <div className="input-field">
                  <input
                    id="search"
                    type="search"
                    required
                    placeholder="Search product..."
                    onChange={(e) => setSearchProduct(e.target.value)}
                    value={searchProduct}
                  />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i
                    className="material-icons"
                    onClick={() => {
                      setSearchProduct("");
                    }}
                  >
                    close
                  </i>
                </div>
              </div>
              <li>
                <Link to="/cart">
                  Cart<span className="new badge">1</span>
                </Link>
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
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
      <ul className="sidenav" id="mob_sidenav">
        <li className="search-bar">
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              placeholder="Search product..."
              onChange={(e) => setSearchProduct(e.target.value)}
              value={searchProduct}
            />
            <label className="label-icon" htmlFor="search"></label>
            <i
              className="material-icons"
              onClick={() => {
                setSearchProduct("");
              }}
            >
              close
            </i>
          </div>
        </li>
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
