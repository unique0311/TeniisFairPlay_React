import React from "react";

import juniorMemberImage from "../assets/ying.png";
import heartBlankImage from "../assets/heart_blank.png";
import commentImage from "../assets/comment.png";

const JuniorMember = () => {
  return (
    <div className="juniorMembers__container">
      <div className="juniorMembers__imageContainer">
        <img src={juniorMemberImage} className="juniorMemberImage__setting" />
        <div className="memberImage__hoverSetting">+</div>
      </div>

      <p className="juniorMembers__name">ying</p>
      <p className="juniorMembers__address">
        sylvieq, May 1, 2014, Junior Stories,
      </p>
      <div className="juniorMembers__message">
        <p>0</p>
        <img src={commentImage} />
      </div>
      <p className="juniorMembers__details">
        15 years of age, Tennis Junior. Striving to prepare for acceptance in a
        Junior Program at a University level. Very...
      </p>
      <div className="juniorMembers__bottom">
        <div className="juniorMembers__likes">
          <img src={heartBlankImage} />
          <p>3 likes</p>
        </div>
        <p className="juniorMembers__bottomReadMore">Read more</p>
      </div>
    </div>
  );
};

export default JuniorMember;
