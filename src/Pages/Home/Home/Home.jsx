import React from "react";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import Services from "../../Services/Services";
import Contact from "../../Contact/Contact";
import Portfolio from "../../Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
