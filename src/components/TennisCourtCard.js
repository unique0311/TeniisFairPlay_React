import React from "react";

import GranvilleImage from "../assets/1269_GranvillePark.png";
import heartImage from "../assets/heart.png";
import starGreenImage from "../assets/start_green.png";
import starGrayImage from "../assets/star__gray.png";
import LinkImage from "../assets/link.png";

const TennisCourtCard = () => {
  return (
    <div className="TennisCourtCard__container">
      <img src={GranvilleImage} className="TennisCourts__mainImage" />
      <div className="TennisCourtCard__titleContainer">
        <p className="TennisCourtCard__title">Graville Park</p>
        <img src={LinkImage} className="courts__redirectOthersite" />
      </div>
      <div className="tennisCourt__ratingContainer">
        <div className="tennisCourtRating__left">
          <img src={starGreenImage} />
          <img src={starGreenImage} />
          <img src={starGreenImage} />
          <img src={starGreenImage} />
          <img src={starGrayImage} />
        </div>
        <img src={heartImage} className="tennisCourt__heartImage" />
      </div>
      <div className="tennisCourt__detail">
        Granville Park is a public tennis facility. There are 4 public tennis
        courts accessible at this tennis location. The tennis courts are not
        lighted.
        <div className="tennisCourt__readMore">Read more...</div>
      </div>
    </div>
  );
};

export default TennisCourtCard;
