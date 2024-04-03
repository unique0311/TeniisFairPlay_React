import React from "react";
import "../components/CSS/home.css";

import mainImage from "../assets/main.png";
import tennisBallImage from "../assets/tennis_ball_sm.png";
import tennisImage from "../assets/tennis.png";
import winCupImage from "../assets/trophy_gold.png";
import Login from "./Login";

const Home = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Home</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={mainImage} className="mainImage__setting" />
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>Our Mission</abbr>
              <div className="crossRightLine" />
            </div>
            <p className="mission__detail">
              <strong>Tennis FairPlay</strong> enhances your tennis experience
              by discovering your Tennis DNA and sharing comments and
              information through an interactive platform which provides members
              direct access to fellow tennis players. Tennis FairPlay advocates
              fairness with a playfair governance. As a community partner,
              Tennis FairPlay’s mandate is to increase tennis participation and
              introduce the sport of tennis to non players by reaching out to
              people with disabilities, youths, adults and seniors adopting
              healthier lifestyle choices.
            </p>
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>video series</abbr>
              <div className="crossRightLine" />
            </div>
            <button className="viewAllVideos__button">View All Videos</button>
            <div className="crossLine">
              <div className="crossLeftLine" style={{ width: "35%" }} />
              <abbr>membership benefits</abbr>
              <div className="crossRightLine" style={{ width: "35%" }} />
            </div>
            <div className="membershipBenefit__container">
              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img
                    src={tennisBallImage}
                    className="tennisBallImage__setting"
                  />
                  <p>Become A Member</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Create</strong> Your Player Profile
                  </p>
                  <p>
                    <strong>Discover</strong> Your Tennis DNA
                  </p>
                  <div className="tennisFairPlay__url">
                    https://dna.tennisfairplay.com
                  </div>
                  <p>
                    <strong>Assess</strong> Your Strokes
                  </p>
                  <p>
                    <strong>Receive</strong> Your Tennis RairPlay Membership
                  </p>
                  <p>
                    <strong>Review</strong> Your Member Benefits
                  </p>
                </div>
              </div>

              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img src={tennisImage} className="tennisImage__setting" />
                  <p>Participate</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Find</strong> a Compatible Match
                  </p>
                  <p>
                    <strong>Check</strong> Tennis Even Canlendar
                  </p>
                  <p>
                    <strong>Comment/Share</strong> because We Care
                  </p>
                  <p>
                    <strong>Connect/Interact</strong> with Players, Clubs,
                    Groups & Associations
                  </p>
                  <p>
                    <strong>Juniors</strong> Send us your Story
                  </p>
                </div>
              </div>

              <div className="membershipBenefit__box">
                <div className="benefitBox__title">
                  <img src={winCupImage} className="winCupImage__setting" />
                  <p>Win!</p>
                </div>
                <div className="benefitBox__detail">
                  <p>
                    <strong>Instant</strong> Draw Entry
                  </p>
                  <p>
                    <strong>Monthly</strong> Prizes
                  </p>
                  <p>
                    <strong>Create</strong> New Friendships
                  </p>
                  <p>
                    <strong>Sponsorship</strong> Opportunities
                  </p>
                  <p>
                    <strong>Partake</strong> in an Interactive Global Tennis
                    Community
                  </p>
                </div>
              </div>
            </div>
            <div className="crossLine">
              <div className="crossLeftLine" />
              <abbr>photo gallery</abbr>
              <div className="crossRightLine" />
            </div>
            <button className="viewAllVideos__button">
              View All Photo Albums
            </button>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
