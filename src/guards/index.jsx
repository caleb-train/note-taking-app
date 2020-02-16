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
  user,
  Component,
  pageProps,
  ...props
}) => {
  const router = useRouter();

  useEffect(() => {
    props.GetUser();

    analytics();
  }, []);

  useEffect(() => {
  }, [user]);

  
  const Authenticate = pageProps => {
    console.log(isAuthenticated);
    if (isAuthenticated) return <Component {...pageProps} />;

    if (/^\/$/.test(router.pathname)) return <Component {...pageProps} />;
    else {
      Router.push("/");
    }
    if(user.sub){
      window.analytics.page();
      console.log(window.analytics);
      window.analytics.identify(user.sub, {
        name: user.name,
        nickName: user.nickname,
        email: user.email,
        picture: user.picture
      });
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
  user: auth.user,
  isSettingAuth: auth.isSettingAuth,
  isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps, { GetUser })(AuthWrapper);
