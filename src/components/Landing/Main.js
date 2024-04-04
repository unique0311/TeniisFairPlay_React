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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Main;
