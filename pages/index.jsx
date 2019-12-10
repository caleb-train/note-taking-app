import React from "react";
import { connect } from "react-redux";
import Banner from "@comp/Home/Banner";
import Audience from "@comp/Home/Audience";
import Features from "@comp/Home/Features";
import Footer from "@comp/Home/Footer";
import "@styles/home.scss";

const Home = ({ authActions }) => {
  return (
    <div className="home">
      <div className="home-bg">
        <Banner authActions={authActions} />
        <Audience />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default connect(state => state, {})(Home);
