import React from "react";
import "../components/CSS/home.css";

import aboutImage from "../assets/about.png";
import Login from "./Login";

const About = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">About</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={aboutImage} className="mainImage__setting" />
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              <strong>Tennis FairPlay</strong> is a Global Interactive Tennis
              Network designed to link tennis athletes locally and
              internationally. With our continually updated profiling and rating
              system, Tennis FairPlay provides current and accurate assessments
              for all our members who are encouraged to share their comments. By
              connecting players and allowing them to interact, we believe this
              social network will provide increased fairplay from matching
              skills and intensity per level of play. We call this new and
              innovative system <strong>“Player’s Tennis DNA”</strong>.
            </p>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              <strong>Tennis FairPlay</strong> provides a rating system for
              players based on skill levels, tournament history and
              sportsmanship. Your Tennis DNA is captured by the essential and
              most critical elements of your tennis game such as;
            </p>
            <ul className="aboutDetail__list">
              <li>Forehand</li>
              <li>Backhand</li>
              <li>Serve</li>
              <li>Net Play</li>
              <li>Return of Serve</li>
              <li>Lob</li>
              <li>Athleticism</li>
              <li>Court Ethics</li>
              <li>Match Play</li>
            </ul>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              Players must complete their profile by rating each of the above
              mentioned elements. The system has a combination of 64million
              unique images designed to create your personalized Player’s DNA.
              This description combined with comments provided by opponents
              allows Tennis FairPlay to provide the most accurate rating for
              each player. The individual strands, or DNA Breakdown is colour
              coded and can be modified as your tennis skills develop changing
              your DNA outcome and overall tennis rating.
            </p>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              <strong>Tennis FairPlay</strong> is based out of British Columbia,
              where we find the most active tennis community in Canada. Over
              5million Canadians reported playing tennis at least once a year.
              Remarkably, 36% of Vancouver residents reported playing tennis of
              which 25% played regularly. As tennis is gaining momentum and
              showing remarkable growth for youth, adults, seniors and people
              with disabilities, Tennis FairPlay endeavours to promote it’s
              social interactive network in every sector of the tennis
              community. As a leading Community Partner, we hope to generate
              interest, enthusiasm and healthy lifestyle choices through the
              great sport of tennis, also known as the sport of a lifetime.
            </p>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default About;
