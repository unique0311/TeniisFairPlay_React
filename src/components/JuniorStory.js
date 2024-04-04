import React from "react";
import "../components/CSS/home.css";

import juniorStoryImage from "../assets/sponsoraJunior.png";
import Login from "./Login";
import JuniorMember from "./JuniorMember";

const JuniorStory = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">
            Archive for category: Junior Stories
          </p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={juniorStoryImage} className="juniorImage__setting" />
            <p className="aboutDetail__firstpart">
              Tennis FairPlay invites Juniors to share their life experiences as
              it pertains to their tennis goals and aspirations.
            </p>
            {/* <div className="paragraph" /> */}
            <p className="aboutDetail__firstpart">
              We invite our members to vote and comment on the Junior’s stories
              to award the player of choice a Tennis FairPlay Annual Grant, a
              contribution award which they MUST apply towards their tennis
              endeavours costs and expenses as approved by Tennis FairPlay.
            </p>
            {/* <div className="paragraph" /> */}
            <p className="aboutDetail__firstpart">
              We also invite juniors, parents, coaches and officials to take
              advantage of the free membership and Sign up with Tennis FairPlay.
              Join in the topic of discussion concerning Juniors and the most
              recent changes to their programs such as equipment requirements
              and tournaments. We offer a Forum basis in aid of launching such
              conversations.
            </p>
            <div className="paragraph" />
            <div className="juniorStories__main">
              <p className="juniorStories__title">Junior Stories:</p>
              <div className="juniorStories__detail">
                <JuniorMember />
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default JuniorStory;
