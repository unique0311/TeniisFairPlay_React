import React from "react";
import "../components/CSS/home.css";

import womanImage from "../assets/woman.png";
import Login from "./Login";

const MembershipBenefits = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Membership Benefits</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <p className="SponsorshipOpportunities__title">
              Complete your Player Profile and Become a Member Today!
            </p>
            <div className="membershipB__container">
              <p>
                <img src={womanImage} />
              </p>

              <p className="membershipB__subtitle">Why Join Tennis FairPlay?</p>
              <p className="SeniorsTennis__paragraph">
                Complete your player profile and instantly become a member of a
                Global Interactive Tennis Network. Tennis FairPlay offers a
                social interactive tennis connection for Recreational play,
                Tournament play and League play for juniors, adults, seniors and
                wheelchair tennis players.
              </p>
              <p className="SeniorsTennis__paragraph">
                Submit your Player Profile Assessment Today and Receive your
                TennisFairPlay Membership Card which provides our members with
                access to all the Tennis FairPlay opportunities described in the
                membership benefits, valued at $500.00 dollars or more. The cost
                to join Tennis FairPlay is $0.00 dollars. Yes, absolutely{" "}
                <strong>Free</strong>!
              </p>
              <p className="SeniorsTennis__paragraph">
                Your active player profile will allow you to share your tennis
                experiences and comment on tennis matches with other members of
                Tennis FairPlay and connect with other tennis enthusiasts from
                your own private clubs. You can increase your tennis network
                both on the local and international circuit. Our Website will
                allow you to seek and identify new potential playing partners.
                The membership directory will unite and link our members to
                create the only International, Interactive Tennis Commnity in
                the world.
              </p>
              <p className="membershipB__subtitle">
                How to Discover Your Tennis DNA?
              </p>
              <p className="SeniorsTennis__paragraph">
                Your Tennis profile also enables Tennis Fairplay to establish
                your Tennis DNA. Your Tennis DNA is the overall description of
                your genetic makeup used in the development and functioning of
                your overall tennis game. Tennis fairplay will provide you with
                a picture of your Tennis DNA which will be personalized and will
                change as your game develops. Your Tennis DNA is an ongoing
                interactive profile designed to give you and your opponents the
                most accurate measure of your tennis skills today.
              </p>
              <p className="membershipB__subtitle">How to Become a Member?</p>
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
                  DNA{" "}
                  <a
                    href="http://dna.tennisfairplay.com"
                    className="aTag__setting"
                    target="_block"
                  >
                    http://dna.tennisfairplay.com
                  </a>
                </p>
              </div>
              {/* <div className="membershipB__LeftContaier">
                <p className="membershipB__subtitle">
                  Why Join Tennis FairPlay?
                </p>
                <p className="SeniorsTennis__paragraph">
                  Complete your player profile and instantly become a member of
                  a Global Interactive Tennis Network. Tennis FairPlay offers a
                  social interactive tennis connection for Recreational play,
                  Tournament play and League play for juniors, adults, seniors
                  and wheelchair tennis players.
                </p>
                <p className="SeniorsTennis__paragraph">
                  Submit your Player Profile Assessment Today and Receive your
                  TennisFairPlay Membership Card which provides our members with
                  access to all the Tennis FairPlay opportunities described in
                  the membership benefits, valued at $500.00 dollars or more.
                  The cost to join Tennis FairPlay is $0.00 dollars. Yes,
                  absolutely <strong>Free</strong>!
                </p>
                <p className="SeniorsTennis__paragraph">
                  Your active player profile will allow you to share your tennis
                  experiences and comment on tennis matches with other members
                  of Tennis FairPlay and connect with other tennis enthusiasts
                  from your own private clubs. You can increase your tennis
                  network both on the local and international circuit. Our
                  Website will allow you to seek and identify new potential
                  playing partners. The membership directory will unite and link
                  our members to create the only International, Interactive
                  Tennis Commnity in the world.
                </p>
                <p className="membershipB__subtitle">
                  How to Discover Your Tennis DNA?
                </p>
                <p className="SeniorsTennis__paragraph">
                  Your Tennis profile also enables Tennis Fairplay to establish
                  your Tennis DNA. Your Tennis DNA is the overall description of
                  your genetic makeup used in the development and functioning of
                  your overall tennis game. Tennis fairplay will provide you
                  with a picture of your Tennis DNA which will be personalized
                  and will change as your game develops. Your Tennis DNA is an
                  ongoing interactive profile designed to give you and your
                  opponents the most accurate measure of your tennis skills
                  today.
                </p>
                <p className="membershipB__subtitle">How to Become a Member?</p>
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
                    DNA{" "}
                    <a
                      href="http://dna.tennisfairplay.com"
                      className="aTag__setting"
                      target="_block"
                    >
                      http://dna.tennisfairplay.com
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default MembershipBenefits;
