import React from "react";

import juniorMemberImage from "../assets/ying.png";

const JuniorMember = () => {
  return (
    <div className="juniorMembers__container">
      <img src={juniorMemberImage} className="juniorMemberImage__setting" />
      <p className="juniorMembers__name">ying</p>
      <p className="juniorMembers__address">
        sylvieq, May 1, 2014, Junior Stories,
      </p>
    </div>
  );
};

export default JuniorMember;
