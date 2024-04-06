import React from "react";
import "../components/CSS/home.css";

import Calendar from "./Calendar";

const Tournaments = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title"></p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="tournaments__container">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
