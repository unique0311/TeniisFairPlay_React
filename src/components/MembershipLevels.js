import React from "react";
import "../components/CSS/home.css";

import Login from "./Login";
import MembershipCard from "./MembershipCard";

const MembershipLevels = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Membership Levels</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <div className="membershipLevel__container">
              <MembershipCard
                AccessType="Player Access"
                Price="0"
                MembersList="View Members list"
                InteractMembers="Interact With Members"
                SentPriMsgMembers="Sent Private Messages to members"
                FindyourMatch="Discover your tennis DNA and Find Your Match"
                AccessingVideo="-"
              />
              <MembershipCard
                AccessType="Coaches Access"
                Price="0"
                MembersList="View Members list"
                InteractMembers="Interact With Members"
                SentPriMsgMembers="Sent Private Messages to members"
                FindyourMatch="Discover your tennis DNA and Find Your Match"
                AccessingVideo="Get Access yo Your Own Training videos"
              />
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default MembershipLevels;
