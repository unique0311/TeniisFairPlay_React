import React from "react";
import "../components/CSS/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mainImage from "../assets/main.png";
import mainTwoImage from "../assets/mainTwo.png";
import mainThreeImage from "../assets/mainThree.png";
import mainFourImage from "../assets/mainFour.png";
import mainFiveImage from "../assets/mainFive.png";
import mainSixImage from "../assets/mainSix.png";
import mainSevenImage from "../assets/mainSeven.png";

import tennisBallImage from "../assets/tennis_ball_sm.png";
import tennisImage from "../assets/tennis.png";
import winCupImage from "../assets/trophy_gold.png";
import Login from "./Login";

const TennisDna = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slideToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Tennis DNA</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <div className="mainImage__setting">
              <Slider {...settings}>
                <div className="fadeImage__container">
                  <img
                    src={mainSevenImage}
                    alt="Image 3"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainFiveImage}
                    alt="Image 4"
                    className="mainSliderImage__setting"
                  />
                </div>
                <div>
                  <img
                    src={mainFourImage}
                    alt="Image 5"
                    className="mainSliderImage__setting"
                  />
                </div>
              </Slider>
            </div>
            <div className="tennisDna__crossLine" />
            <div className="tennisDna__detailsContainer">
              <div className="tennisDna__title">What is Tennis DNA?</div>
              <p className="aboutDetail__firstpart">
                Tennis FairPlay provides a rating system for players based on
                skill levels, tournament history and sportsmanship. Your Tennis
                DNA is captured by the essential and most critical elements of
                your tennis game such as;
              </p>
              <div className="membershipB__becomeStep">
                <p>•Forehand</p>
                <p>•Backhand</p>
                <p>•Serve</p>
                <p>•Net Play</p>
                <p>•Return of Serve</p>
                <p>•Lob</p>
                <p>•Athleticism</p>
                <p>•Court Ethics</p>
                <p>•Match Play</p>
              </div>
              <p className="aboutDetail__firstpart">
                Players must complete their profile by rating each of the above
                mentioned elements. The system has a combination of 64 million
                unique images designed to create your personalized Player’s DNA.
                This description combined with comments provided by opponents
                allows Tennis FairPlay to provide the most accurate rating for
                each player. The individual strands, or DNA Breakdown is colour
                coded and can be modified as your tennis skills develop changing
                your DNA outcome and overall tennis rating.
              </p>
              <div className="tennisDna__title">
                How to Discover Your Tennis DNA?
              </div>
              <p className="aboutDetail__firstpart">
                Your Tennis profile also enables Tennis Fairplay to establish
                your Tennis DNA. Your Tennis DNA is the overall description of
                your genetic makeup used in the development and functioning of
                your overall tennis game. Tennis fairplay will provide you with
                a picture of your Tennis DNA which will be personalized and will
                change as your game develops. Your Tennis DNA is an ongoing
                interactive profile designed to give you and your opponents the
                most accurate measure of your tennis skills today.
              </p>
              <div className="tennisDna__title">How to Become a Member?</div>

              <div className="membershipB__becomeStep">
                <p>
                  <strong>Step1:</strong> Visit out Website:{" "}
                  <a
                    href="https://www.tennisfairplay.com"
                    className="aTag__setting"
                    target="_block"
                  >
                    www.tennisfairplay.com
                  </a>
                </p>
                <p>
                  <strong>Step2:</strong> Click Become a Member
                </p>
                <p>
                  <strong>Step3:</strong> Create an Account
                </p>
                <p>
                  <strong>Step4:</strong> Complete your Player Profile
                </p>
                <p>
                  <strong>Step5:</strong> Check your email to confirm and
                  activate your account
                </p>
                <p>
                  <strong>Step6:</strong> Click on your Member Login Name
                </p>
                <p>
                  <strong>Step7:</strong> Click Profile
                </p>
                <p>
                  <strong>Step8:</strong> Scroll down to Discover your Tennis
                  DNA
                </p>
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default TennisDna;
