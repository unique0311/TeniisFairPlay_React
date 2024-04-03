import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../CSS/landing.css";

import Home from "../Home";
import About from "../About";
import Navbar from "./Navbar";
import Shop from "../Shop";

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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Main;
