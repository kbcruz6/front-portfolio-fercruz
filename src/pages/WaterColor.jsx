import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialMediaBottom from "../components/SocialMediaBottom";

//! IMAGES
import watercolor0 from "../assets/watercolor/w-ave-0.jpeg";
import watercolor1 from "../assets/watercolor/w-ave-1.jpeg";
import watercolor2 from "../assets/watercolor/w-ave-2.jpeg";
import watercolor3 from "../assets/watercolor/w-ave-3.jpeg";
import watercolor4 from "../assets/watercolor/w-ave-4.jpeg";
import watercolor5 from "../assets/watercolor/w-ave-5.jpeg";
import watercolor6 from "../assets/watercolor/w-ave-6.jpeg";
import watercolor7 from "../assets/watercolor/w-ave-7.jpeg";
import watercolor8 from "../assets/watercolor/w-ave-8.jpeg";
import watercolor9 from "../assets/watercolor/w-ave-9.jpeg";
import watercolor10 from "../assets/watercolor/w-ave-10.jpeg";
import watercolor11 from "../assets/watercolor/w-ave-11.jpeg";
import watercolor12 from "../assets/watercolor/w-ave-12.jpeg";
import watercolor13 from "../assets/watercolor/w-ave-13.jpeg";
import watercolor14 from "../assets/watercolor/w-ave-14.jpeg";
import watercolor15 from "../assets/watercolor/w-ave-15.jpeg";
import watercolor16 from "../assets/watercolor/w-ave-16.jpeg";
import watercolor17 from "../assets/watercolor/w-ave-17.jpeg";
import watercolor18 from "../assets/watercolor/w-ave-18.jpeg";
import watercolor19 from "../assets/watercolor/w-ave-19.jpeg";
import watercolor20 from "../assets/watercolor/w-ave-20.jpeg";
import watercolor21 from "../assets/watercolor/w-ave-21.jpeg";
import watercolor22 from "../assets/watercolor/w-ave-22.jpeg";
import watercolor23 from "../assets/watercolor/w-ave-23.jpeg";
import watercolor24 from "../assets/watercolor/w-ave-24.jpeg";
import watercolor25 from "../assets/watercolor/w-ave-25.jpeg";
import watercolor26 from "../assets/watercolor/w-ave-26.jpeg";
import watercolor27 from "../assets/watercolor/w-ave-27.jpeg";
import watercolor28 from "../assets/watercolor/w-ave-28.jpeg";
import watercolor29 from "../assets/watercolor/w-ave-29.jpeg";

const WaterColor = () => {
  const data = [
    watercolor0,
    watercolor1,
    watercolor2,
    watercolor3,
    watercolor4,
    watercolor5,
    watercolor6,
    watercolor7,
    watercolor8,
    watercolor9,
    watercolor10,
    watercolor11,
    watercolor12,
    watercolor13,
    watercolor14,
    watercolor15,
    watercolor16,
    watercolor17,
    watercolor18,
    watercolor19,
    watercolor20,
    watercolor21,
    watercolor22,
    watercolor23,
    watercolor24,
    watercolor25,
    watercolor26,
    watercolor27,
    watercolor28,
    watercolor29,
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
            Watercolor's gallery
          </h1>
          <p className="py-3">
            Discover the stunning world of birds through my watercolor art in
            this project, featuring 30 interesting pieces. Creating this series
            for a book was a great experience, I loved to be involved. Each work
            of art in this collection is special for me, I tried to capture the
            essence of these magnificent creatures in a way that only
            watercolors can.
          </p>
        </div>
        {/*//! GRID  */}
        <div className="h-full w-full sm:columns-5 columns-2 justify-center items-center">
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

export default WaterColor;
