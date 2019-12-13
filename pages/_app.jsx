import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import AuthWrapper from "@client/guards";
import { initStore } from "@store";
import "@styles/main.scss";
import "@styles/paper.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
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
        <AuthWrapper Component={Component} pageProps={pageProps} />
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
