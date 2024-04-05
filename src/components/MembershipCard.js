import React from "react";

const MembershipCard = ({
  AccessType,
  Price,
  MembersList,
  InteractMembers,
  SentPriMsgMembers,
  FindyourMatch,
  AccessingVideo,
}) => {
  return (
    <div className="membershipCard__container">
      <div className="membershipCard__title">
        <p>{AccessType}</p>
      </div>
      <div className="membershipCard__round">
        <div className="membershipCardRound__money">
          <p>$</p>
          <div className="membership__moneyValue">{Price}</div>
        </div>
        <p>per month</p>
      </div>
      <div className="membershipCard__price" />
      <div className="membershipCard__listContainer">
        <p>{MembersList}</p>
      </div>
      <div className="membershipCard__interactContainer">
        <p>{InteractMembers}</p>
      </div>
      <div className="membershipCard__listContainer">
        <p>{SentPriMsgMembers}</p>
      </div>
      <div className="membershipCard__interactContainer">
        <p>{FindyourMatch}</p>
      </div>
      <div className="membershipCard__listContainer">
        <p>{AccessingVideo}</p>
      </div>
      <div className="membershipCard__button">
        <button>Become a Member Now!</button>
      </div>
    </div>
  );
};

export default MembershipCard;
