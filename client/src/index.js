import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Contexts from "./contexts/Contexts";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
