import React from "react";
//Importazione icone
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Alta <span>qualità</span> dei servizi
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="iconaOrologio" />
              <h3>Efficienza</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="lavoro" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diagramma" />
              <h3>Diagramma</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="iconaOrologio" />
              <h3>Economico</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
