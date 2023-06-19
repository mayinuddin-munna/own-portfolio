import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navabar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
