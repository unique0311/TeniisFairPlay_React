import React from "react";
import "./index.css";

import Main from "./components/Landing/Main";
import Footer from "./components/Landing/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App__container">
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
