import React from "react";
import home1 from "../img/home1.png";
//styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>we work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contattaci per qualsiasi idea fotografica o cinematografica, siamo dei
          professionisti affermati nel mestiere.
        </motion.p>
        <motion.button variants={fade}>Contattaci</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="profilo" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
