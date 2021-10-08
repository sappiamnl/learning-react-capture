import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyleNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. Chi Siamo</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname.startsWith("/work") ? "60%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contatti</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "60%" : "0%" }}
          />
        </li>
      </ul>
    </StyleNav>
  );
};

const StyleNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Krona One", cursive;
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    #logo {
      display: inline-block;
      padding: 1rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 38%;
  @media (max-width: 1200px) {
    left: 25%;
  }
`;

export default Nav;
