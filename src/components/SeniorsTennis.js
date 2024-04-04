import React from "react";
import "../components/CSS/home.css";

import seniorsTennisImage from "../assets/SenoirsTennis.png";
import Login from "./Login";

const SeniorsTennis = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Seniors Tennis</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={seniorsTennisImage} className="juniorImage__setting" />
            <p className="SeniorsTennis__title">
              Prolong your Life and Vitality
            </p>
            <p className="SeniorsTennis__paragraph">
              The Baby Boomer Generation is the faster growing age group. In
              2011, according to the Canada Census, an estimated 5.0 million
              Canadians were reported as being 65 years of age or older. That
              number is expected to double in the next 25 years to a whopping
              10.4 million senior by 2036.
            </p>
            <p className="SeniorsTennis__paragraph">
              Tennis is one of the preferred sports for seniors, at the social
              club level, men’s or women’s league, seniors ranking and
              non-ranking tournament around the world.
            </p>
            <p className="SeniorsTennis__paragraph">
              If according to Dr. Ralph Roffenberger’s research, playing tennis
              reduces your risk of death in half, it may explain why in we can
              amazingly witness competitors in the 65,70,75,80 and 90 age
              categories both in the Worlds Seniors and Super Seniors Events.
              The 2014 Senior World Championships are held at Palm Beach Gardens
              in Florida, USA from April 21st to April 26th, for the Team
              Competition and April 27th to May 4th for the Individual
              Competition. The 2014 Super-Seniors World Championships will be
              held in Antalya, Turkey October 13th to October 18th for the Team
              Competition and October 19th to October 26th for the Individual
              Competition. These are premier events on the ITF Seniors Circuit.
            </p>
            <p className="SeniorsTennis__paragraph">
              Team Competition for Senior Players dates as back to 1958. Due to
              the success of these tournaments, the International Tennis
              Federations now offers a full range of 20 age categories
              competitive events for both men and women, Seniors and Super
              Seniors.
            </p>
            <p className="SeniorsTennis__paragraph">
              Nations compete against each other, typically on a round robin
              basis. Hosting the Seniors and Super-Seniors World Team
              Championships is a wonderful opportunity to welcome players to
              their country and to their clubs. These tournaments offer an
              avenue for fun competition, socializing and establishing new
              friendships with like-minded individuals. Experience the World of
              Tennis through travel and gain an appreciation for different
              cultural settings and experiences.
            </p>
            <p className="SeniorsTennis__paragraph">
              Select Tennis as your sport of choice in the pursuit of
              Excellence.
            </p>
            <div className="seniors__blockQuote">
              <p>
                Aristotle: “Excellence is an art won by training and
                habituation. We are what we repeatedly do. Excellence, then, is
                not an act but a habit. “
              </p>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default SeniorsTennis;
