import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../CSS/landing.css";

import Home from "../Home";

const Main = () => {
  return (
    <div className="Main__container">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Main;
