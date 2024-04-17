import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "../components/CSS/home.css";

import walletImage from "../assets/wallet.webp";
import ethereumImage from "../assets/ethereum.webp";
import uniSwapImage from "../assets/uniswap.webp";
import swapImage from "../assets/swap.png";
import appUniSwapImage from "../assets/appUniswap.png";

const BuyToken = () => {
  const SlowTextDisplay = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the interval duration as needed for the desired speed

      return () => {
        clearInterval(interval);
      };
    }, [text]);

    return <div>{displayedText}</div>;
  };

  return (
    <div className="howToBuy__container">
      <p className="howToBuy__MainTitle">How To Buy $TFP Token?</p>
      <Fade>
        <div className="howToBuy__guideStep">
          <div className="howToBuy__imageSettingSingle">
            <img src={walletImage} />
          </div>
          <div className="howToBuyGuide__textPart">
            <p className="howToBuyGuide__textMainTitle">Create a Wallet</p>

            <p className="howToBuyGuide__textMainDetail">
              <SlowTextDisplay
                text="download metamask or your wallet of choice from the app
                    store or google play store for free. Desktop users, download
                    the google chrome extension by going to metamask.io."
              />
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="howToBuy__guideStep">
          <div className="howToBuy__imageSettingSingle">
            <img src={ethereumImage} />
          </div>
          <div className="howToBuyGuide__textPart">
            <p className="howToBuyGuide__textMainTitle">Get Some ETH</p>

            <p className="howToBuyGuide__textMainDetail">
              <SlowTextDisplay text="have ETH in your wallet to switch to $TFP. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet." />
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="howToBuy__guideStep">
          <div className="howToBuy__imageSettingSingle">
            <img src={uniSwapImage} />
          </div>
          <div className="howToBuyGuide__textPart">
            <p className="howToBuyGuide__textMainTitle">Go to Uniswap</p>

            <p className="howToBuyGuide__textMainDetail">
              <SlowTextDisplay text="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $TFP token address into Uniswap, select TFP, and confirm. When Metamask prompts you for a wallet signature, sign." />
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="howToBuy__guideStep">
          <div className="howToBuy__imageSetting">
            <img src={swapImage} />
          </div>

          <div className="howToBuyGuide__textPart">
            <p className="howToBuyGuide__textMainTitle">Switch Eth for $TFP</p>

            <p className="howToBuyGuide__textMainDetail">
              <SlowTextDisplay text="switch ETH for $TFP. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility." />
            </p>
          </div>
        </div>
      </Fade>
      <Fade>
        <img src={appUniSwapImage} className="appUniswapImage__setting" />
      </Fade>
    </div>
  );
};

export default BuyToken;
