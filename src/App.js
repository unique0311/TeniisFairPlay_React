import React from "react";
import "../src/components/CSS/landing.css";

import Main from "./components/Landing/Main";
import Footer from "./components/Landing/Footer";
import Navbar from "./components/Landing/Navbar";

const App = () => {
  return (
    <div className="App__container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
