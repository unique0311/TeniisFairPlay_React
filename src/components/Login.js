import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

import "../components/CSS/login.css";
import facebookImage from "../assets/facebook.png";
import twitterImage from "../assets/twitter.png";
import ShortenedWord from "./ShortenedWord.js";
import copyImage from "../assets/copy.png";

const Login = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const [selectedTag, setSelectedTag] = useState(() => {
    const tags = localStorage.getItem("selectedTag");
    return tags ? tags : "";
  });

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    localStorage.setItem("selectedTag", tag);
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Create a Web3Provider using window.ethereum
        const newProvider = new Web3Provider(window.ethereum);
        setProvider(newProvider);

        // Request access to the user's MetaMask account
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the signer (user's account) from the provider
        const signer = newProvider.getSigner();

        // Use the signer to interact with the blockchain
        // For example, you can get the signer's address
        const connectedAddress = await signer.getAddress();

        setAddress(connectedAddress);
        console.log("Connected with address:", connectedAddress);
        // You can now use the signer to send transactions, interact with contracts, etc.
      } else {
        console.error("MetaMask extension not detected");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    try {
      // Reset the provider and signer
      setProvider(null);
      setAddress("");
      // Logic to clean up any other wallet-related state or data
      // For example, resetting the user's address or balance
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <div className="Login__container">
      <p className="loginContainer__title">Become a Member</p>
      <div className="login__setting">
        <p className="loginSetting__title">Member Login</p>
        <div className="loginButton__container">
          {address && address ? (
            <div className="connectedWallet__Container">
              <ShortenedWord word={address} />
              <p onClick={disconnectWallet}>Disconnect</p>
            </div>
          ) : (
            <button className="loginButton" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      <div className="LoginReference__site">
        <p className="LoginReference__title">Tennis FairPlay Community</p>
        <div className="LoginReference__name">
          <p>Photo Gallery</p>
          <p>Video Series</p>
          <Link
            to="/membership-benefits"
            className={`LinkTo_setting ${
              selectedTag === "MembershipBenefits" ? "LinktoSelected" : ""
            }`}
            onClick={() => handleTagSelect("MembershipBenefits")}
          >
            <div>Membership Benefits</div>
          </Link>
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
