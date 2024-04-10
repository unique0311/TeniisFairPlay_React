import React from "react";
import "../components/CSS/home.css";

const RedirectWallet = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Wallet Import</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="redirectWallet__container">
          <p className="redirectWallet__mainTitle">
            Don't have the Metamask wallet in your browser?
          </p>
          <p className="redirectWallet__installTitle">
            Install MetaMask Wallet Extension
          </p>
          <p className="redirectWallet__clickHereTitle">
            <span>
              <a
                href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
              >
                Click here
              </a>
            </span>{" "}
            to redirect the chrome web store
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedirectWallet;
