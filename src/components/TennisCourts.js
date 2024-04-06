import React from "react";
import "../components/CSS/home.css";

import searchSmallImage from "../assets/search_small.png";
import locationSmallImage from "../assets/location__small.png";
import Login from "./Login";
import TennisCourtCard from "./TennisCourtCard";

const TennisCourts = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">All Tennis Courts in Vancouver</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <p className="aboutDetail__firstpart">
              Did you know that you can play tennis at one of 184 tennis courts
              in city of Vancouver's neighbourhoods? That includes free and paid
              courts in Stanley Park! Vancouver has over 174 tennis courts in
              parks spread throughout the city. Casual tennis play is on a first
              come, first served basis. If people are waiting to use the courts,
              the players have 30 minutes maximum time to play before
              surrendering the court. Casual tennis play is on a first come,
              first served basis. If people are waiting to use the courts, the
              players have 30 minutes maximum time to play before surrendering
              the court. Public courts are not available for rentals except for
              some tournaments, school use, community centre programs, and
              Vancouver Park Board affiliated clubs.
            </p>
            <div className="TennisCourts__SearchContainer">
              <div className="TennisCourts__searchSubContainer">
                <div className="TennisCourts__searchMain">
                  <img src={searchSmallImage} />
                  <input placeholder="Search for Tennis Court" />
                </div>
                <div className="TennisCourts__searchMain">
                  <img src={locationSmallImage} />
                  <input placeholder="Near" />
                </div>
                <button>Search</button>
              </div>
            </div>
            <div className="TennisCourts__placeContainer">
              <TennisCourtCard />
              <TennisCourtCard />
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default TennisCourts;
