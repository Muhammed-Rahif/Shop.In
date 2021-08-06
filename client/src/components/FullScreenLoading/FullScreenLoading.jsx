import React from "react";
import "./FullScreenLoading.css";
import { colors } from "../../constants/colors";

export default function App({ text = "Getting Ready!" }) {
  return (
    <section id="fullscreen_loading">
      <img width="100" src="logo512.png" alt="Shop.In" />
      <div className="progress">
        <div
          style={{ backgroundColor: colors.primaryDark }}
          className="indeterminate"
        ></div>
      </div>
      <p style={{ color: colors.primaryDark, fontWeight: "600" }}>{text}</p>
    </section>
  );
}
