import React from "react";
import { Provider } from "react-redux";
import Nav from "@comp/Nav";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "@store";
import Auth from "@utils/Auth";
import "@styles/main.scss";
import "@styles/paper.css";

class MyApp extends App {
  auth = new Auth(Router);

  static async getInitialProps({ Component, ctx }) {
    /* console.log(ctx); */
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, store, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Nav />
        <main>
          <Component {...pageProps} auth={this.auth} />
        </main>
        <ToastContainer
          autoClose={5000}
          position="top-center"
          hideProgressBar
          rtl={false}
          pauseOnHover
        />
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
