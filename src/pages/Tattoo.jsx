import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SocialMediaBottom from "../components/SocialMediaBottom";

//! IMAGES
import tattoo1 from "../assets/tattoo/t-ballena.jpeg";
import tattoo2 from "../assets/tattoo/t-escorpion.jpeg";
import tattoo5 from "../assets/tattoo/t-medusa.jpeg";
import tattoo4 from "../assets/tattoo/t-perro1.jpeg";
import tattoo3 from "../assets/tattoo/t-perro2.jpeg";
import tattoo6 from "../assets/tattoo/t-perro3.jpeg";
import tattoo7 from "../assets/tattoo/t-tigre.jpeg";
import tattoo8 from "../assets/tattoo/t-escorpion.jpeg";
import tattoo9 from "../assets/tattoo/t-ballena.jpeg";
import Footer from "../components/Footer";

const Tattoo = () => {
  const data = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
    tattoo6,
    tattoo7,
    tattoo8,
    tattoo9,
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
            Tattoo's gallery
          </h1>
          <p className="py-3">
            Step into the world of tattoo art at my gallery. Here, you'll find a
            part of my designs, inked to bring a client's vision and ideas to
            life. Each work represents a unique piece of art, which shows my
            commitment to crafting meaningful and lasting tattoos. Let your
            imagination soar as you explore these pictures and consider the
            endless possibilities for your next tattoos.
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

export default Tattoo;
