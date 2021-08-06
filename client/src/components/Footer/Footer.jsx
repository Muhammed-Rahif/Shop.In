import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer id="footer" class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Shop.In Alrights reserved 2021</h5>
            <p class="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              veniam aperiam pariatur ullam sed earum delectus eum rerum cum vel
              saepe amet, atque nam quo consectetur, culpa inventore odio,
              tenetur nostrum. Voluptatum, maxime ducimus!
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Features</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="/cart">
                  Cart
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="/checkout">
                  Checkout
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 Copyright Alrights Reserved
          <a
            class="grey-text text-lighten-4 right"
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
