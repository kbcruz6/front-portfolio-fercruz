import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialMediaBottom from "../components/SocialMediaBottom";

//! IMAGES
import muralism1 from "../assets/muralism/m-gorila-fer.jpeg";
import muralism2 from "../assets/muralism/m-atardecer.jpeg";
import muralism5 from "../assets/muralism/m-ola.jpeg";
import muralism4 from "../assets/muralism/m-zorro.jpeg";
import muralism3 from "../assets/muralism/m-flores-fer.jpeg";
import muralism6 from "../assets/muralism/m-zorro.jpeg";
import muralism7 from "../assets/muralism/m-atardecer.jpeg";
import muralism8 from "../assets/muralism/m-flores-fer.jpeg";
import muralism9 from "../assets/muralism/m-gorila.jpeg";

const Muralism = () => {
  const data = [
    muralism1,
    muralism2,
    muralism3,
    muralism4,
    muralism5,
    muralism6,
    muralism7,
    muralism8,
    muralism9,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      name="home"
      className="dark:bg-black bg-[var(--color2)] h-full w-full flex-row pt-20"
    >
      <Navbar />
      <SocialMediaBottom />

      <div className="px-4 sm:px-20">
        {/*//! TEXT  */}
        <div className="flex flex-col justify-center pb-2 text-white">
          <h1 className=" text-4xl text-center border-b-4 dark:border-orange-500 border-[var(--color4)]">
            Muralism gallery
          </h1>
          <p className="py-3">
            Discover my unique muralism artworks! Each piece is a reflection of
            my creativity, imagination and my passion for colors and nature.
            From grand public murals to intimate indoor pieces. Thank you for
            taking the time to appreciate my work and I hope you find
            inspiration in each piece.
          </p>
        </div>
        {/*//! GRID  */}
        <div className="h-full w-full sm:columns-3 columns-1 justify-center items-center">
          {/*//! IMAGES  */}
          {data.map((pic, key) => (
            <div>
              <img
                key={key}
                src={pic}
                alt=""
                className="w-full py-2 hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Muralism;
