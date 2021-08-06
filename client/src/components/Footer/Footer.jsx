import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer id="footer" className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">
              <b>Shop.In</b> 2021
            </h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              veniam aperiam pariatur ullam sed earum delectus eum rerum cum vel
              saepe amet, atque nam quo consectetur, culpa inventore odio,
              tenetur nostrum. Voluptatum, maxime ducimus!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Features</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/cart">
                  Cart
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/checkout">
                  Checkout
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © <b>Shop.In</b> 2021 Copyright Alrights Reserved
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.github.com"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
