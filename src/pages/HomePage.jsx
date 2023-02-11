import React from "react";
//! COMPONENTS
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Contact from "../components/Contact.jsx";
import SocialMediaBottom from "../components/SocialMediaBottom.jsx";
import Gallery from "../components/Gallery.jsx";

const HomePage = () => {
  return (
    <div className="dark:bg-slate-800 bg-[var(--color2)] duration-300">
      <Navbar />
      <Home />
      <Gallery />
      <Work />
      <About />
      {/* <Contact /> */}
      <SocialMediaBottom />
    </div>
  );
};

export default HomePage;
