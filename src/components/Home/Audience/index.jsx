import React from "react";
import image from "@styles/css";
import "./index.scss";

const Audience = () => {
  return (
    <div className="audience-bg" style={image.audienceBg}>
      <header>
        <h4>Our Audience</h4>
        <p>
          with ScrapBook you can pen client request on the go and design
          accordingly
        </p>
      </header>
      <section>
        <div>
          <embed src={image.developer} className="client" />
          <h5>Developers</h5>
        </div>
        <div>
          <embed src={image.student} className="client" />
          <h5>Students</h5>
        </div>
        <div>
          <embed src={image.manager} className="client" />
          <h5>Managers</h5>
        </div>
      </section>
    </div>
  );
};

export default Audience;
