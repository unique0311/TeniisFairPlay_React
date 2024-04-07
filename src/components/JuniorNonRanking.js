import React from "react";
import "../components/CSS/home.css";

import CalendarEvent from "./CalendarEvent";

const JuniorNonRanking = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Junior Non-Ranking</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="tournaments__container">
          <CalendarEvent
            EventTitle="Junior Non-Ranking"
            EventResultHereText="No matching events listed under Junior Non-Ranking. Please try viewing the full calendar for a complete list of events."
          />
        </div>
      </div>
    </div>
  );
};

export default JuniorNonRanking;
