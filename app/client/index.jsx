import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { ThemeContext } from "@store/context";
import Routes from "@routes";

const App = () => {
  return (
    <ThemeContext>
      <Router>
        <Routes />
      </Router>
    </ThemeContext>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) module.hot.accept();
