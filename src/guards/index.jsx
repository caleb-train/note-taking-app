import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "@comp/Loader";
import Nav from "@comp/Nav";
import Router, { useRouter } from "next/router";
import { GetUser } from "@store/actions/authActions";
import analytics from "./analytics";

const AuthWrapper = ({
  isSettingAuth,
  isAuthenticated,
  Component,
  pageProps,
  ...props
}) => {
  const router = useRouter();

  useEffect(() => {
    props.GetUser();
    
    analytics();
  }, []);

  const Authenticate = pageProps => {
    console.log(isAuthenticated);
    if (isAuthenticated) return <Component {...pageProps} />;

    if (/^\/$/.test(router.pathname)) return <Component {...pageProps} />;
    else {
      Router.push("/");
    }
    return <Component {...pageProps} />;
  };

  return isSettingAuth ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <main>{Authenticate(pageProps)}</main>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  isSettingAuth: auth.isSettingAuth,
  isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps, { GetUser })(AuthWrapper);
