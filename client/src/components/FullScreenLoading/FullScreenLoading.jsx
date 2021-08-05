import React from "react";
import "./FullScreenLoading.css";
import { colors } from "../../constants/colors";

export default function App({ text = "Getting Ready!" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <img width="100" src="logo512.png" alt="Shop.In" />
      <div
        style={{
          width: "80px",
          backgroundColor: colors.primary,
          margin: 0,
          marginBottom: 10,
        }}
        className="progress"
      >
        <div
          style={{ backgroundColor: colors.primaryDark }}
          className="indeterminate"
        ></div>
      </div>
      <p style={{ color: colors.primaryDark, fontWeight: "600" }}>{text}</p>
    </div>
  );
}
