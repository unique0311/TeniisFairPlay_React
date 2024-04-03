import React, { useState, useEffect } from "react";

import "../components/CSS/landing.css";
import upImage from "../assets/up.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrollToTop__container ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src={upImage} className="upImage__setting" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
