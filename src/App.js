import React, { useContext } from "react";

//! ROUTES & COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Muralism from "./pages/Muralism";
import Tattoo from "./pages/Tattoo";
import WaterColor from "./pages/WaterColor";
import Portrait from "./pages/Portrait";

//! CONTEXT
import { ThemeContext } from "./context/ThemeContext";

//! AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  setTimeout(() => {
    AOS.refresh();
  }, 500);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/muralism" element={<Muralism />} />
          <Route path="/tattoo" element={<Tattoo />} />
          <Route path="/watercolor" element={<WaterColor />} />
          <Route path="/portrait" element={<Portrait />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
