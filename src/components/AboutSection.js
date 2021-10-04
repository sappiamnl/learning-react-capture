import React from "react";
import home1 from "../img/home1.png";
//styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>we work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
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
