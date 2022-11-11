import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="welcome" />
      </div>
      <div className="content">
        <p>
          <p className="font">Ja sam Nela</p>
        </p>
        <h1>Frontend Developer</h1>

        <Link to="/project" className="btn">
          Projekti
        </Link>
        <Link to="/contact" className="btn btn-light">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
