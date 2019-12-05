import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import { HashRouter as Router } from "./node_modules/react-router-dom";
import { ToastContainer } from "./node_modules/react-toastify";
import Nav from "./node_modules/@comp/Nav";
import ListNotes from "./node_modules/@routes/ListNotes";
import SingleNote from "./node_modules/@routes/SingleNote";
import CreateNote from "./node_modules/@routes/CreateNote";
import { ThemeContext } from "./node_modules/@store/context";
import Guard from "./node_modules/@guards";
import "./node_modules/@styles/main.scss";
import "./node_modules/@styles/paper.css";

const App = () => {
  return (
    <ThemeContext>
      <Router>
        <Nav history={history} />
        <main>
          <Guard exact path="/" component={ListNotes} />
          <Guard exact path="/note" component={CreateNote} />
          <Guard path="/note/:id" component={SingleNote} />
        </main>
        <ToastContainer
          autoClose={5000}
          position="top-center"
          hideProgressBar
          rtl={false}
          pauseOnHover
        />
      </Router>
    </ThemeContext>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) module.hot.accept();
