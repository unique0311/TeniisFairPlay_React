import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/landing.css";

import logoImage from "../../assets/Site-Logo.png";
import awardImage from "../../assets/award.png";
import downImage from "../../assets/down.png";
import searchImage from "../../assets/search.png";
import cartImage from "../../assets/cart.png";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [selectedTag, setSelectedTag] = useState(() => {
    const tags = localStorage.getItem("selectedTag");
    return tags ? tags : "Home";
  });
  const location = useLocation();
  useEffect(() => {
    setSelectedTag(() => {
      const tags = localStorage.getItem("selectedTag");
      return tags ? tags : "Home";
    });
  }, [location]);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    localStorage.setItem("selectedTag", tag);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isShrunk = currentScrollPos > 50;
      setIsShrunk(isShrunk);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isShrunk ? "scrolled" : ""}>
      <div className="nav__container">
        <img
          src={logoImage}
          className={
            isShrunk ? "logoImage__setting__small" : "logoImage__setting"
          }
        />
        <div className="Navbar__lists">
          <Link
            to="/"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Home" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "About" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("About")}
          >
            About
          </Link>
          <Link
            to="/shop"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Shop" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("Shop")}
          >
            Shop
          </Link>
          <div
            className={`list__setting__basic community__setting ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Community" ? "scale__active" : ""}`}
            // onClick={() => handleTagSelect("Community")}
          >
            Community
            <img src={downImage} className="downImage__setting" />
            <div
              className={`dropdown__content__basic
                ${isShrunk ? "dropdown__content__small" : "dropdown__content"}
              `}
            >
              <div className="membership__awardOnly">
                <img src={awardImage} />
                News & Announcement
              </div>
              <div className="membership__awardOnly">
                <img src={awardImage} />
                Photo Gallery
              </div>
              <div className="membership__awardOnly">
                <img src={awardImage} />
                Video Series
              </div>
              <Link
                to="/category/junior-stories"
                className={`LinkTo_setting ${
                  selectedTag === "SponsorJunior" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("SponsorJunior")}
              >
                <div>Sponsor a Junior</div>
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
                to="/health-and-wellness"
                className={`LinkTo_setting ${
                  selectedTag === "HealthAndWellness" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("HealthAndWellness")}
              >
                <div>Health & Wellness</div>
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
                to="/wheelchair-tennis"
                className={`LinkTo_setting ${
                  selectedTag === "WheelChairTennis" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("WheelChairTennis")}
              >
                <div>Wheelchair Tennis</div>
              </Link>
              <Link
                to="/sponsorship-opportunities"
                className={`LinkTo_setting ${
                  selectedTag === "SponsorshipOpportunities"
                    ? "LinktoSelected"
                    : ""
                }`}
                onClick={() => handleTagSelect("SponsorshipOpportunities")}
              >
                <div>Sponsorship Opportunities</div>
              </Link>
              <Link
                to="/sponsors"
                className={`LinkTo_setting ${
                  selectedTag === "OurSponsors" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("OurSponsors")}
              >
                <div>Our Sponsors</div>
              </Link>
            </div>
          </div>
          <div
            className={`list__setting__basic members__setting ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Members" ? "scale__active" : ""}`}
            // onClick={() => handleTagSelect("Members")}
          >
            Members
            <img src={downImage} className="downImage__setting" />
            <div
              className={`dropdown__content__basic
                ${isShrunk ? "dropdown__content__small" : "dropdown__content"}
              `}
            >
              <div className="membership__awardOnly">
                <img src={awardImage} />
                Members
              </div>
              <div className="membership__awardOnly">
                <img src={awardImage} />
                Members Activity Feed
              </div>
              <div className="membership__awardOnly">
                <img src={awardImage} />
                Member Groups & Clubs
              </div>
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
                to="/membership-account/membership-levels"
                className={`LinkTo_setting ${
                  selectedTag === "MembershipLevels" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div>Membership Levels</div>
              </Link>
            </div>
          </div>
          <div
            className={`list__setting__basic tournaments__setting ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "Tournaments" ? "scale__active" : ""}`}
            // onClick={() => handleTagSelect("Tournaments")}
          >
            Tournaments
            <img src={downImage} className="downImage__setting" />
            <div
              className={`dropdown__content__basic
                ${isShrunk ? "dropdown__content__small" : "dropdown__content"}
              `}
            >
              <div>All Events</div>
              <div>Adult Non-Ranking</div>
              <div>Open-NTRP Ranking</div>
              <div>Senior Ranking</div>
            </div>
          </div>
          <p
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "TennisCourts" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("TennisCourts")}
          >
            Tennis Courts
          </p>
          <img src={cartImage} className="navbarImage__setting" />
          <img src={searchImage} className="navbarImage__setting" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
