import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center lg:bg-fixed w-full justify-center h-screen bg-cover custom-img text-white"
    >
      {/*//! Container */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" px-8 flex flex-col h-full duration-300 gap-2 justify-start pt-40 sm:justify-center sm:pt-20"
      >
        <h1 className="uppercase text-4xl sm:text-5xl text-[var(--color3)] dark:text-orange-400 ">
          Fernanda Cruz
        </h1>{" "}
        <h2 className="text-2xl sm:text-3xl">
          Muralist, Tattoo Artist & Portraitist.
        </h2>
        <div>
          <Link to="gallery" smooth={true} duration={500}>
            <button className="rounded-3xl shadow-md shadow-black group px-4 py-3 my-2 flex items-center border-2 border-[var(--color3)] hover:text-white hover:bg-[var(--color3)] duration-300 dark:border-orange-400 dark:hover:bg-orange-400">
              Have a look!
              <HiArrowNarrowDown className="ml-3 animate-bounce" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
