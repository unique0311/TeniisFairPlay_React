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
        <Link to="/" onClick={() => handleTagSelect("Home")}>
          <img
            src={logoImage}
            className={
              isShrunk ? "logoImage__setting__small" : "logoImage__setting"
            }
          />
        </Link>
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
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  News & Announcement
                </div>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  Photo Gallery
                </div>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  Video Series
                </div>
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
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  Members
                </div>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  Members Activity Feed
                </div>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className={`LinkTo_setting `}
                onClick={() => handleTagSelect("MembershipLevels")}
              >
                <div className="membership__awardOnly">
                  <img src={awardImage} />
                  Member Groups & Clubs
                </div>
              </Link>
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
          <Link
            to="/events"
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
              <Link
                to="/events/category/all_events"
                className={`LinkTo_setting ${
                  selectedTag === "AllEvents" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("AllEvents")}
              >
                <div>All Events</div>
              </Link>
              <Link
                to="/events/category/adult_non_ranking"
                className={`LinkTo_setting ${
                  selectedTag === "AdultNonRanking" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("AdultNonRanking")}
              >
                <div>Adult Non-Ranking</div>
              </Link>
              <Link
                to="/events/category/open_ntrp_ranking"
                className={`LinkTo_setting ${
                  selectedTag === "OpenNTRPRanking" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("OpenNTRPRanking")}
              >
                <div>Open-NTRP Ranking</div>
              </Link>
              <Link
                to="/events/category/junior_non_ranking"
                className={`LinkTo_setting ${
                  selectedTag === "JuniorNonRanking" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("JuniorNonRanking")}
              >
                <div>Junior Non-Ranking</div>
              </Link>
              <Link
                to="/events/category/senior_ranking"
                className={`LinkTo_setting ${
                  selectedTag === "SeniorRanking" ? "LinktoSelected" : ""
                }`}
                onClick={() => handleTagSelect("SeniorRanking")}
              >
                <div>Senior Ranking</div>
              </Link>
            </div>
          </Link>
          <Link
            to="/places/category/tennis-courts"
            className={`list__setting__basic ${
              isShrunk ? "list__setting__small" : "list__setting"
            } ${selectedTag === "TennisCourts" ? "scale__active" : ""}`}
            onClick={() => handleTagSelect("TennisCourts")}
          >
            Tennis Courts
          </Link>
          <img src={cartImage} className="navbarImage__setting" />
          <img src={searchImage} className="navbarImage__setting" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
