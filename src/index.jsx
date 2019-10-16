import React from "react";
import ReactDOM from "react-dom";
import "@styles/main.scss";

const App = () => {
  return <h1 className="bg-teal-500">Hello</h1>;
};

ReactDOM.render(<App />, document.querySelector("#app"));