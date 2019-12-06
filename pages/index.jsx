import React from "react";
import { connect } from "react-redux";
import Router from "next/router";
import "@styles/index.scss";
/* 
class Home extends Re
 */
const Home = ({ auth }) => {
  return <button onClick={_ => auth.login()}>Hello</button>;
};

export default connect(state => state, {})(Home);
