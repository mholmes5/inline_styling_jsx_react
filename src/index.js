import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  backgroundColor: "grey"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello Sly!</h1>,
  document.getElementById("root")
);
