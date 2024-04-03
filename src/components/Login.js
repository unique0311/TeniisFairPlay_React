import React from "react";

import "../components/CSS/login.css";
import facebookImage from "../assets/facebook.png";
import twitterImage from "../assets/twitter.png";

const Login = () => {
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
          <p>Sponsorship Opportunities</p>
          <p>Wheelchair Tennis</p>
          <p>Double Tennis</p>
          <p>Seniors Tennis</p>
          <p>Tids & Teens Tennis</p>
          <p>Health & Wellness</p>
          <p>Sponsor a Junior</p>
        </div>
      </div>
      <div className="LoginSocial__site">
        <p>Follow Us:</p>
        <div className="LoginSocial__image">
          <img src={facebookImage} />
          <img src={twitterImage} />
        </div>
      </div>
    </div>
  );
};

export default Login;
