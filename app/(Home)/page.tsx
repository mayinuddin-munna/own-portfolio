import Banner from "@/components/ui/Banner";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
