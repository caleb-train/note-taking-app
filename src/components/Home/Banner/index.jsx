import React from "react";
import { connect } from "react-redux";
import images from "@styles/css";
import "./index.scss";

const Banner = ({ isAuthenticated }) => {
  return (
    <div className="banner-bg">
      <embed className="banner-img" src={images.bannerImg} />
      <div className="banner-content">
        <section>
          <h3>ScrapBook</h3>
          <p>We help you gather your ideas and preserve your memories.</p>
        </section>
        <div className="enter-app">
          <a href={isAuthenticated ? "/note" : "/api/login"}>
            <button className="banner-action">Pen a Thought</button>
          </a>
          <a href={isAuthenticated ? "/notes" : "/api/login"}>
            <button className="banner-action">Your Thoughts</button>
          </a>
        </div>
      </div>
      <embed className="banner-papers" src={images.paperImg} />
    </div>
  );
};

export default connect(({ auth }) => auth, {})(Banner);
