import React from "react";
import image from "@styles/css";
import "./index.scss";

const Banner = () => {
  return (
    <div className="features-bg">
      <header>
        <h4 className="">Features</h4>
        <p>
          Our features make viewing and sharing of Ideas a breeze for our users
        </p>
      </header>
      <section>
        <div>
          <embed src={image.scrapbook} className="feat anim" />
          <h5>Make Notes</h5>
        </div>
        <div>
          <embed src={image.scrap} className="feat anim" />
          <h5>Group notes</h5>
        </div>
        <div>
          <embed src={image.offline} className="feat anim" />
          <h5>View offline</h5>
        </div>
        <div>
          <embed src={image.share} className="feat anim" />
          <h5>Share Online</h5>
        </div>
      </section>
    </div>
  );
};

export default Banner;
