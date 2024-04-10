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
import Tournaments from "../Tournaments";
import AllEvents from "../AllEvents";
import AdultNonRanking from "../AdultNonRanking";
import OpenNTRPRanking from "../OpenNtrpRanking";
import SeniorRanking from "../SeniorRanking";
import JuniorNonRanking from "../JuniorNonRanking";
import Cart from "../Cart";
import TennisDna from "../TennisDna";
import RedirectWallet from "../RedirectWallet";

const Main = () => {
  return (
    <div className="Main__container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/junior-stories" element={<JuniorStory />} />
            <Route path="/double-tennis" element={<DoubleTennis />} />
            <Route
              path="/health-and-wellness"
              element={<HealthAndWellness />}
            />
            <Route path="/seniors-tennis" element={<SeniorsTennis />} />
            <Route path="/kids-teens-tennis" element={<KidsAndTeensTennis />} />
            <Route path="/wheelchair-tennis" element={<WheelChairTennis />} />
            <Route
              path="/sponsorship-opportunities"
              element={<SponsorshipOppotunities />}
            />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route
              path="/membership-benefits"
              element={<MembershipBenefits />}
            />
            <Route
              path="/membership-account/membership-levels"
              element={<MembershipLevels />}
            />
            <Route
              path="/places/category/tennis-courts"
              element={<TennisCourts />}
            />
            <Route path="/events" element={<Tournaments />} />
            <Route path="/events/category/all_events" element={<AllEvents />} />
            <Route
              path="/events/category/adult_non_ranking"
              element={<AdultNonRanking />}
            />
            <Route
              path="/events/category/open_ntrp_ranking"
              element={<OpenNTRPRanking />}
            />
            <Route
              path="/events/category/senior_ranking"
              element={<SeniorRanking />}
            />
            <Route
              path="/events/category/junior_non_ranking"
              element={<JuniorNonRanking />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/tennis-dna" element={<TennisDna />} />
            <Route path="/wallet-import" element={<RedirectWallet />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Main;
