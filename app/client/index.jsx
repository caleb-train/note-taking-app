import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from 'react-router-dom';
import Nav from "@comp/Nav";
import ListNotes from "@routes/ListNotes";
import SingleNote from "@routes/SingleNote";
import CreateNote from "@routes/CreateNote";
import { ThemeContext } from "./context";
import "@styles/main.scss";
import "@styles/paper.css";

const App = ()=>{
  return (
    <ThemeContext>
      <Router >
        <Nav history={history}/>
        <main>
          <Route exact path="/" component={ListNotes} />
          <Route exact path="/note" component={CreateNote} />
          <Route path="/note/:id" component={SingleNote} />
        </main>
      </Router>
        {/*<Router >
        <NoNote/>
        <PreviewNote/>
        <EditNote/>
        <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
      </Router> */}
      
    </ThemeContext>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) module.hot.accept();