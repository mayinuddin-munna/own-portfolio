import React from "react";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import Services from "../../Skills/Skills";
import Portfolio from "../../Portfolio/Portfolio";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      {/* <Services /> */}
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

export default Home;
