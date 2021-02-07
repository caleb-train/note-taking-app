import React, { useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Loader from "@comp/Loader";
import Auth from "@utils/Auth";
import { GetUser } from "@store/actions/authActions";
import "@styles/index.scss";

const Callback = props => {
  const authAction = new Auth(Router);
  useEffect(() => {
    authAction.handleAuthentication().then(res => {
      if (!res) {
        window.location.replace("/");
      } else {
        window.analytics.track('Sign Up', {
          plan: 'Enterprise'
        });
        props.GetUser();
        Router.push("/notes");
      }
    });
  }, []);

  return <Loader />;
};

export default connect(({ auth }) => auth, { GetUser })(Callback);
