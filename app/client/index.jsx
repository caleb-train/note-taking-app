import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from "@comp/Nav";
import ListNotes from "@routes/ListNotes";
import SingleNote from "@routes/SingleNote";
import CreateNote from "@routes/CreateNote";
import { ThemeContext } from "@store/context";
import Guard from "@guards";
import "@styles/main.scss";
import "@styles/paper.css";

const App = ()=>{
  return (
    <ThemeContext>
      <Router >
        <Nav history={history}/>
        <main>
          <Guard exact path="/" component={ListNotes}/>
          <Guard exact path="/note" component={CreateNote} />
          <Guard path="/note/:id" component={SingleNote} />
        </main>
      <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
      </Router>      
    </ThemeContext>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) module.hot.accept();