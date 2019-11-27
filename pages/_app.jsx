import React from "react";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import Nav from "@comp/Nav";
import { ThemeContext } from "@store/context";
import "@styles/main.scss";
import "@styles/paper.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <ToastContainer
          autoClose={5000}
          position="top-center"
          hideProgressBar
          rtl={false}
          pauseOnHover
        />
      </ThemeContext>
    );
  }
}

export default MyApp;
