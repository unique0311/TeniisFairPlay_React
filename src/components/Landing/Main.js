import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../CSS/landing.css";

import Home from "../Home";
import About from "../About";
import Navbar from "./Navbar";
import Shop from "../Shop";
import JuniorStory from "../JuniorStory";
import DoubleTennis from "../DoubleTennis";
import HealthAndWellness from "../HealthAndWellness";
import SeniorsTennis from "../SeniorsTennis";
import KidsAndTeensTennis from "../KidsAndTeensTennis";
import WheelChairTennis from "../WheelChairTennis";
import SponsorshipOppotunities from "../SponsorshipOpportunities";
import Sponsors from "../Sponsors";
import MembershipBenefits from "../MembershipBenefits";
import MembershipLevels from "../MembershipLevels";
import TennisCourts from "../TennisCourts";

const Main = () => {
  return (
    <div className="Main__container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route
              exact
              path="/category/junior-stories"
              element={<JuniorStory />}
            />
            <Route exact path="/double-tennis" element={<DoubleTennis />} />
            <Route
              exact
              path="/health-and-wellness"
              element={<HealthAndWellness />}
            />
            <Route exact path="/seniors-tennis" element={<SeniorsTennis />} />
            <Route
              exact
              path="/kids-teens-tennis"
              element={<KidsAndTeensTennis />}
            />
            <Route
              exact
              path="/wheelchair-tennis"
              element={<WheelChairTennis />}
            />
            <Route
              exact
              path="/sponsorship-opportunities"
              element={<SponsorshipOppotunities />}
            />
            <Route exact path="/sponsors" element={<Sponsors />} />
            <Route
              exact
              path="/membership-benefits"
              element={<MembershipBenefits />}
            />
            <Route
              exact
              path="/membership-account/membership-levels"
              element={<MembershipLevels />}
            />
            <Route
              exact
              path="/places/category/tennis-courts"
              element={<TennisCourts />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Main;
