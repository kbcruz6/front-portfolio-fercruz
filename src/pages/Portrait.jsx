import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialMediaBottom from "../components/SocialMediaBottom";

//! IMAGES
import portrait1 from "../assets/portrait/p-hipocampo.jpeg";
import portrait2 from "../assets/portrait/p-hojas.jpeg";
import portrait5 from "../assets/portrait/p-panterajean.jpeg";
import portrait4 from "../assets/portrait/p-perro1.jpeg";
import portrait3 from "../assets/portrait/p-perro2.jpeg";
import portrait6 from "../assets/portrait/p-hipocampo.jpeg";
import portrait7 from "../assets/portrait/p-hojas.jpeg";
import portrait8 from "../assets/portrait/p-perro2.jpeg";
import portrait9 from "../assets/portrait/p-perro1.jpeg";
import Footer from "../components/Footer";

const Portrait = () => {
  const data = [
    portrait1,
    portrait2,
    portrait3,
    portrait4,
    portrait5,
    portrait6,
    portrait7,
    portrait8,
    portrait9,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      name="home"
      className="dark:bg-slate-900 bg-[var(--color2)] h-full w-full flex-row pt-20"
    >
      <Navbar />
      <SocialMediaBottom />

      <div className="px-4 sm:px-20">
        {/*//! TEXT  */}
        <div className="flex flex-col justify-center pb-2 text-white">
          <h1 className=" text-4xl text-center border-b-4 dark:border-orange-500 border-[var(--color4)]">
            Portraits and more!
          </h1>
          <p className="py-3">
            In this gallery, you can explore mainly my versatility. Featuring a
            diverse range of portraits and paintings, here you will find me
            capturing the human spirit and bringing the world around us to life.
            From lifelike depictions of loved ones to imaginative designs. Hope
            you enjoy!
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
      <Footer />
    </div>
  );
};

export default Portrait;
