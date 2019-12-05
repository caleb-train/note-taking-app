import React from "react";
import { Provider } from "react-redux";
import Nav from "@comp/Nav";
import { ToastContainer } from "react-toastify";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "@store";
import "@styles/main.scss";
import "@styles/paper.css";

class MyApp extends App {
  /* static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  } */

  render() {
    const { Component, store } = this.props;
    return (
      <Provider store={store}>
        <Nav />
        <main>
          <Component />
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
