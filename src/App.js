import React, { useContext } from "react";

//! COMPONENTS
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import SocialMediaBottom from "./components/SocialMediaBottom.jsx";

//! CONTEXT
import { ThemeContext } from "./context/ThemeContext";

//! AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./components/Gallery.jsx";
AOS.init();

function App() {
  setTimeout(() => {
    AOS.refresh();
  }, 500);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className="bg-slate-900">
        {/* <div className="bg-[var(--color2)] dark:bg-transparent"> */}
        <Navbar />
        <Home />
        <Gallery />
        <Work />
        <About />
        {/* <Skills /> */}
        <Contact />
        <SocialMediaBottom />
      </div>
    </div>
  );
}

export default App;
