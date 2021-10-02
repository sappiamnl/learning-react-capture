import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyleNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. Chi Siamo</a>
        </li>
        <li>
          <a href="#">2. Servizi</a>
        </li>
        <li>
          <a href="#">3. Contatti</a>
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
`;

export default Nav;
