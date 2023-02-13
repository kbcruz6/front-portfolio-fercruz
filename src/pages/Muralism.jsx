import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialMediaBottom from "../components/SocialMediaBottom";

//! IMAGES
import muralism1 from "../assets/muralism/m-gorila-fer.jpeg";
import muralism2 from "../assets/muralism/m-atardecer.jpeg";
import muralism3 from "../assets/muralism/m-ola.jpeg";
import muralism4 from "../assets/muralism/m-zorro.jpeg";
import muralism5 from "../assets/muralism/m-flores-fer.jpeg";
import muralism9 from "../assets/muralism/m-gorila.jpeg";

const Muralism = () => {
  const data = [
    muralism1,
    muralism2,
    muralism3,
    muralism4,
    muralism5,
    // muralism6,
    // muralism7,
    // muralism8,
    muralism9,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      name="home"
      className="dark:bg-black bg-[var(--color2)] h-full w-full flex-row"
    >
      <Navbar />
      <SocialMediaBottom />
      <div className="h-full w-full sm:columns-3 columns-1 justify-center items-center p-20">
        {data.map((pic, key) => (
          <img
            key={key}
            src={pic}
            alt=""
            className="w-full py-2 hover:scale-105 hover:cursor-pointer duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Muralism;
