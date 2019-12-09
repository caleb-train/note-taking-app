import React from "react";
import { connect } from "react-redux";
import Banner from "@comp/Home/Banner";
import Audience from "@comp/Home/Audience";
import Features from "@comp/Home/Features";
import Footer from "@comp/Home/Footer";
import "@styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Audience />
      <Features />
      <Footer />
    </div>
  );
};

export default connect(state => state, {})(Home);
