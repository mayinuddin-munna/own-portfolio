import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import Services from "../../Services/Services";
import Portfolio from "../../Portfolio/Portfolio";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
