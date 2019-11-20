import React from "react";
import { ToastContainer } from "react-toastify";
import Nav from "@comp/Nav";
import { withRouter } from "react-router-dom";
import Home from "@routes/Home";
import ListNotes from "@routes/ListNotes";
import SingleNote from "@routes/SingleNote";
import CreateNote from "@routes/CreateNote";
import Auth from "@utils/Auth";
import AuthCallback from "@routes/Auth/AuthCallback";
import Guard from "@guards";
import "@styles/main.scss";
import "@styles/paper.css";

const App = ({ history }) => {
  const auth = new Auth(history);
  return (
    <>
      <Nav history={history} />
      <main>
        <Guard history={history} auth={auth} exact path="/" component={Home} />
        <Guard
          history={history}
          auth={auth}
          path="/callback"
          component={AuthCallback}
        />
        <Guard history={history} path="/notes" component={ListNotes} />
        <Guard history={history} path="/note" component={CreateNote} />
        <Guard history={history} path="/note/:id" component={SingleNote} />
      </main>
      <ToastContainer
        autoClose={5000}
        position="top-center"
        hideProgressBar
        rtl={false}
        pauseOnHover
      />
    </>
  );
};

export default withRouter(App);
