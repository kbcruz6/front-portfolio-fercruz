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
        data-aos="fade"
        data-aos-duration="2000"
        className=" px-8 flex flex-col h-full duration-300 gap-2 justify-start pt-40 sm:justify-center sm:pt-20"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color3)] dark:text-orange-400">
          Fernanda Cruz
        </h1>{" "}
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-orange-200">
          Muralist, Tattoo Artist & Portraitist.
        </h2>
        {/* <p className="py-4 max-w-[700px] text-justify">
            As a highly motivated Artist, I'm looking for new challenges around
            the world, to continue creating Visual Arts and growing
            professionally and personally.
          </p> */}
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="rounded-3xl shadow-md shadow-black group px-4 py-3 my-2 flex items-center border-2 border-[var(--color3)] hover:text-white hover:bg-[var(--color3)] duration-300 dark:border-orange-500 dark:hover:bg-orange-500">
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
