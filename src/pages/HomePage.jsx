import React, { useEffect } from "react";
//! COMPONENTS
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Categories from "../components/Categories.jsx";
import SocialMediaBottom from "../components/SocialMediaBottom.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-[var(--color2)] duration-300">
      <Navbar />
      <Home />
      <Gallery />
      <Categories />
      <About />
      <SocialMediaBottom />
      <Footer />
    </div>
  );
};

export default HomePage;
