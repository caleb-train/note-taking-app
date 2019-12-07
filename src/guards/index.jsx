import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "@comp/Loader";
import Nav from "@comp/Nav";
import Router from "next/router";
import Auth from "@utils/Auth";
import { GetUser } from "@store/actions/authActions";

const AuthWrapper = ({ isSettingAuth, Component, pageProps, ...props }) => {
  const authAction = new Auth(Router);

  useEffect(() => {
    props.GetUser();
  }, []);
  return isSettingAuth ? (
    <Loader />
  ) : (
    <>
      <Nav authActions={authAction} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  isSettingAuth: auth.isSettingAuth
});

export default connect(mapStateToProps, { GetUser })(AuthWrapper);
