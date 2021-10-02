import React from "react";
import home1 from "../img/home1.png";
//styled
//import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>we work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contattaci per qualsiasi idea fotografica o cinematografica, siamo dei
          professionisti affermati nel mestiere.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="profilo" />
      </Image>
    </About>
  );
};

export default AboutSection;
