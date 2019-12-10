import React from "react";
import images from "@styles/css";
import "./index.scss";

const Banner = ({ authActions }) => {
  return (
    <div className="banner-bg">
      <embed className="banner-img" src={images.bannerImg} />
      <div className="banner-content">
        <section>
          <h3>ScrapBook</h3>
          <p>We help you gather your ideas and preserve your memories.</p>
        </section>
        <button className="banner-action" onClick={_ => authActions.login()}>
          Pen a Thought
        </button>
      </div>
      <embed className="banner-papers" src={images.paperImg} />
    </div>
  );
};

export default Banner;
