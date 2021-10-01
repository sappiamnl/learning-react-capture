import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>we work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contattaci per qualsiasi idea fotografica o cinematografica, siamo dei
          professionisti affermati nel mestiere.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="img">
        <img src={home1} alt="profilo" />
      </div>
    </div>
  );
};
export default AboutSection;
