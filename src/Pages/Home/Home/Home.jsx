import React from "react";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import Services from "../../Services/Services";
import Portfolio from "../../Portfolio/Portfolio";
import Contact from "../../Contact/Contact";

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
