import React from "react";
import image from "@styles/css";
import "./index.scss";

const Banner = () => {
  return (
    <div className="footer-bg">
      <h5>ScrapBook {new Date().getFullYear()}</h5>
    </div>
  );
};

export default Banner;
