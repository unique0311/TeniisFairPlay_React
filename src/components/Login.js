import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../components/CSS/login.css";
import facebookImage from "../assets/facebook.png";
import twitterImage from "../assets/twitter.png";

const Login = () => {
  const [selectedTag, setSelectedTag] = useState(() => {
    const tags = localStorage.getItem("selectedTag");
    return tags ? tags : "";
  });

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    localStorage.setItem("selectedTag", tag);
  };

  return (
    <div className="Login__container">
      <p className="loginContainer__title">Become a Member</p>
      <div className="login__setting">
        <p className="loginSetting__title">Member Login</p>
        <div className="loginInput__container">
          <p>UserName</p>
          <input type="text" />
        </div>
        <div className="loginInput__container">
          <p>Password</p>
          <input type="password" />
        </div>
        <div className="loginRememberMe__setting">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>
        <div className="loginButton__container">
          <button className="loginButton">Log In</button>
          <button className="registerButton">Register</button>
        </div>
      </div>
      <div className="LoginReference__site">
        <p className="LoginReference__title">Tennis FairPlay Community</p>
        <div className="LoginReference__name">
          <p>Photo Gallery</p>
          <p>Video Series</p>
          <p>Membership Benefits</p>
          <Link
            to="/sponsorship-opportunities"
            className={`LinkTo_setting ${
              selectedTag === "SponsorshipOpportunities" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("SponsorshipOpportunities")}
          >
            <div>Sponsorship Opportunities</div>
          </Link>
          <Link
            to="/wheelchair-tennis"
            className={`LinkTo_setting ${
              selectedTag === "WheelChairTennis" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("WheelChairTennis")}
          >
            <div>Wheelchair Tennis</div>
          </Link>
          <Link
            to="/double-tennis"
            className={`LinkTo_setting ${
              selectedTag === "DoubleTennis" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("DoubleTennis")}
          >
            <div>Doubles Tennis</div>
          </Link>
          <Link
            to="/seniors-tennis"
            className={`LinkTo_setting ${
              selectedTag === "SeniorsTennis" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("SeniorsTennis")}
          >
            <div>Seniors Tennis</div>
          </Link>
          <Link
            to="/kids-teens-tennis"
            className={`LinkTo_setting ${
              selectedTag === "KidsAndTeensTennis" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("KidsAndTeensTennis")}
          >
            <div>Kids & Teens Tennis</div>
          </Link>
          <Link
            to="/health-and-wellness"
            className={`LinkTo_setting ${
              selectedTag === "HealthAndWellness" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("HealthAndWellness")}
          >
            <div>Health & Wellness</div>
          </Link>
          <Link
            to="/category/junior-stories"
            className={`LinkTo_setting ${
              selectedTag === "SponsorJunior" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("SponsorJunior")}
          >
            <div>Sponsor a Junior</div>
          </Link>
        </div>
      </div>
      <div className="LoginSocial__site">
        <p>Follow Us:</p>
        <div className="LoginSocial__image">
          <a href="http://www.facebook.com/tennisfairplay" target="_blank">
            <img src={facebookImage} />
          </a>
          <a href="http://www.twitter.com/TennisFairplay" target="_blank">
            <img src={twitterImage} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
