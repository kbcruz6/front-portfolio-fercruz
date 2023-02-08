import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      // className="w-full h-screen rounded-tl-[8000px] rounded-br-full duration-300 bg-[var(--color1)] shadow-lg shadow-[var(--color3)] text-[var(--color4)] dark:shadow-none dark:bg-transparent dark:text-orange-200"
      className="flex items-center justify-center h-screen bg-cover custom-img text-white"
    >
      {/*//! Overlay  */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70">
        {/*//! Container */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full duration-300 "
        >
          <p className="">Hi there! Welcome to my portfolio! 🎨</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[var(--color3)]">
            I'm Fernanda Cruz
          </h1>{" "}
          <h2 className="text-4xl sm:text-7xl font-bold">
            a Muralist, Tattoo Artist & Portraitist.
          </h2>
          <p className="py-4 max-w-[700px] text-justify">
            As a highly motivated Artist, I'm looking for new challenges around
            the world, to continue creating Visual Arts and growing
            professionally and personally.
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="rounded-3xl shadow-md shadow-slate-600 group px-4 py-3 my-2 flex items-center border-2 border-[var(--color3)] hover:text-white hover:bg-[var(--color3)] duration-300">
                Have a look!
                <HiArrowNarrowDown className="ml-3 animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
