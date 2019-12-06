import React, { useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Loader from "@comp/Loader";
import "@styles/index.scss";

const Callback = ({ auth }) => {
  useEffect(() => {
    auth.handleAuthentication().then(res => {
      if (!res) {
        window.location.replace("/");
      } else {
        Router.push("/notes");
      }
    });
  }, []);

  return <Loader />;
};

export default connect(state => state, {})(Callback);
