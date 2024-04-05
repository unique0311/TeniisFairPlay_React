import React from "react";
import "../components/CSS/home.css";

import SponsorsImage from "../assets/sponsors.png";
import Login from "./Login";

const Sponsors = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Sponsors</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={SponsorsImage} className="juniorImage__setting" />
            <p className="SeniorsTennis__title">Coming Soon!</p>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Sponsors;
