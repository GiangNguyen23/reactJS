import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Admin from "./Misterm/Left/Admin";

import News from "./Misterm/Left/Above";
import News1 from "./Misterm/Left/Below";
import Ads from "./Misterm/Left/Ads";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="content">
    <div className="left">
      <News></News>
      <News1></News1>
    </div>
    <div className="right">
      <Ads></Ads>
    </div>
  </div>
  // <div className="container">
  //   <Admin />
  // </div>
);
