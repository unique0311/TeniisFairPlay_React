import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/landing.css";

import logoImage from "../../assets/Site-Logo.png";
import awardImage from "../../assets/award.png";
import downImage from "../../assets/down.png";
import searchImage from "../../assets/search.png";
import cartImage from "../../assets/cart.png";
import cartResImage from "../../assets/cart_res.png";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isTournament, setIsTournament] = useState(false);
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

  const toggleResponsiveMenu = () => {
    setIsCommunity(false);
    setIsTournament(false);
    setIsMember(false);
    setIsResponsive(!isResponsive);
  };

  const toggleIsCommunity = () => {
    setIsCommunity(!isCommunity);
  };

  const toggleIsMembers = () => {
    setIsMember(!isMember);
  };

  const toggleIsTournaments = () => {
    setIsTournament(!isTournament);
  };

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
    <nav className={` ${isShrunk ? "scrolled" : ""} `}>
      <div className="nav__container">
        <div className={`navbar__mainContainer `}>
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
            <Link to="/cart" onClick={() => handleTagSelect("Cart")}>
              <img src={cartImage} className="navbarImage__setting" />
            </Link>

            <img src={searchImage} className="navbarImage__setting" />
          </div>
          <div className="ResponsiveNavbar__container">
            <Link to="/cart" onClick={() => handleTagSelect("Cart")}>
              <img src={cartResImage} className="cartResImage__setting" />
            </Link>
            <div
              className={`hambugar__menu ${isResponsive ? "active" : ""}`}
              onClick={toggleResponsiveMenu}
            >
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        <div
          className={`responsiveContainer__nav ${
            isResponsive ? "navbar__responsive" : ""
          }`}
        >
          {/* <div className="fullpage__container" /> */}
          <div className="resNavbar__mainContainer">
            <Link
              to="/"
              className="resNavbar__detail"
              onClick={() => {
                setIsResponsive(false);
                handleTagSelect("Home");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="resNavbar__detail"
              onClick={() => {
                setIsResponsive(false);
                handleTagSelect("About");
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              className="resNavbar__detail"
              onClick={() => {
                setIsResponsive(false);
                handleTagSelect("Shop");
              }}
            >
              Shop
            </Link>
            <div
              className="resNavbar__detail resNavbar__detailPlus"
              onClick={() => {
                toggleIsCommunity();
                setIsMember(false);
                setIsTournament(false);
              }}
            >
              <p>Community</p>
              <div className="resNavbar__plusButton">+</div>
            </div>
            <div
              className={`basic__plusMainContainer ${
                isCommunity ? "isCommunitySetting" : ""
              }`}
            >
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>News & Announcement</p>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>Photo Gallery</p>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>Video Series</p>
              </Link>
              <Link
                to="/category/junior-stories"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("SponsorJunior");
                }}
              >
                <p className="pludMainContainer__pSetting">Sponsor A Junior</p>
              </Link>
              <Link
                to="/double-tennis"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("DoubleTennis");
                }}
              >
                <p className="pludMainContainer__pSetting">Double Tennis</p>
              </Link>
              <Link
                to="/health-and-wellness"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("HealthAndWellness");
                }}
              >
                <p className="pludMainContainer__pSetting">Health & Wellness</p>
              </Link>
              <Link
                to="/seniors-tennis"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("SeniorsTennis");
                }}
              >
                <p className="pludMainContainer__pSetting">Seniors Tennis</p>
              </Link>
              <Link
                to="/kids-teens-tennis"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("KidsAndTeensTennis");
                }}
              >
                <p className="pludMainContainer__pSetting">
                  Kids & Teens Tennis
                </p>
              </Link>
              <Link
                to="/wheelchair-tennis"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("WheelChairTennis");
                }}
              >
                <p className="pludMainContainer__pSetting">Wheelchair Tennis</p>
              </Link>
              <Link
                to="/sponsorship-opportunities"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("SponsorshipOpportunities");
                }}
              >
                <p className="pludMainContainer__pSetting">
                  Sponsorship Opportunities
                </p>
              </Link>
              <Link
                to="/sponsors"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("OurSponsors");
                }}
              >
                <p className="pludMainContainer__pSetting">Our Sponsors</p>
              </Link>
            </div>
            <div
              className="resNavbar__detail resNavbar__detailPlus"
              onClick={() => {
                toggleIsMembers();
                setIsCommunity(false);
                setIsTournament(false);
              }}
            >
              <p>Members</p>
              <div className="resNavbar__plusButton">+</div>
            </div>
            <div
              className={`basic__plusMainContainer ${
                isMember ? "isCommunitySetting" : ""
              }`}
            >
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>Members</p>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>Members Activity Feed</p>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <img src={awardImage} />
                <p>Member Groups And Clubs</p>
              </Link>
              <Link
                to="/membership-benefits"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipBenefits");
                }}
              >
                <p className="pludMainContainer__pSetting">
                  Membership Benefits
                </p>
              </Link>
              <Link
                to="/membership-account/membership-levels"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("MembershipLevels");
                }}
              >
                <p className="pludMainContainer__pSetting">Membership Levels</p>
              </Link>
            </div>
            <Link
              className="resNavbar__detail resNavbar__detailPlus"
              onClick={() => {
                toggleIsTournaments();
                setIsMember(false);
                setIsCommunity(false);
              }}
            >
              <p>Tournaments</p>
              <div className="resNavbar__plusButton">+</div>
            </Link>
            <div
              className={`basic__plusMainContainer ${
                isTournament ? "isCommunitySetting" : ""
              }`}
            >
              <Link
                to="/events/category/all_events"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("AllEvents");
                }}
              >
                <p className="pludMainContainer__pSetting">All Events</p>
              </Link>
              <Link
                to="/events/category/adult_non_ranking"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("AdultNonRanking");
                }}
              >
                <p className="pludMainContainer__pSetting">Adult Non-Ranking</p>
              </Link>
              <Link
                to="/events/category/open_ntrp_ranking"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("OpenNTRPRanking");
                }}
              >
                <p className="pludMainContainer__pSetting">Open-NTRP Ranking</p>
              </Link>
              <Link
                to="/events/category/junior_non_ranking"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("JuniorNonRanking");
                }}
              >
                <p className="pludMainContainer__pSetting">
                  Junior Non-Ranking
                </p>
              </Link>
              <Link
                to="/events/category/senior_ranking"
                className="plusMainContainer__detail"
                onClick={() => {
                  setIsResponsive(false);
                  handleTagSelect("SeniorRanking");
                }}
              >
                <p className="pludMainContainer__pSetting">Senior Ranking</p>
              </Link>
            </div>
            <Link
              to="/places/category/tennis-courts"
              className="resNavbar__detail"
              onClick={() => {
                setIsResponsive(false);
                handleTagSelect("TennisCourts");
              }}
            >
              Tennis courts
            </Link>
            <input
              placeholder="Start typing to search..."
              className="resNavbar__input"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
