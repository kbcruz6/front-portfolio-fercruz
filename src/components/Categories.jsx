import React from "react";
import muralism from "../assets/muralism/m-gorila.jpeg";
import tattoo from "../assets/tattoo/t-medusa.jpeg";
import waterColors from "../assets/watercolor/w-ave-0.jpeg";
import portraits from "../assets/portrait/p-perro2.jpeg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" dark:bg-transparent">
      <div
        name="categories"
        className="w-full md:h-screen text-slate-600 duration-300 bg-[var(--color1)] shadow-lg shadow-slate-400 dark:shadow-none dark:text-orange-200 dark:bg-transparent "
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full duration-300">
          <div className="pb-6 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-[var(--color4)] text-[var(--color3)] dark:text-white dark:border-orange-500">
              Categories
            </p>
          </div>
          {/*//! Card grid container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/*//! Card grid item */}
            {/* //! MURALISM */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="max-w-sm rounded-3xl hover:scale-110 shadow-lg shadow-slate-500 dark:shadow-[#040c16] p-2 bg-slate-200 text-[var(--color3)] hover:bg-slate-300/90 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300">
                <Link to="/muralism">
                  <div
                    style={{ backgroundImage: `url(${muralism})` }}
                    className="group container rounded-3xl flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[180px] sm:h-[300px]"
                  ></div>{" "}
                  <div className="font-bold text-xl my-2 flex justify-center items-center">
                    Muralism{" "}
                  </div>
                </Link>
              </div>
            </div>
            {/*//! TATTOO */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="max-w-sm hover:scale-110  rounded-3xl shadow-lg shadow-slate-500 dark:shadow-[#040c16] p-2 bg-slate-200 text-[var(--color3)] hover:bg-slate-300/90 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300">
                <Link to="/tattoo">
                  <div
                    style={{ backgroundImage: `url(${tattoo})` }}
                    className="group container rounded-3xl flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[180px] sm:h-[300px]"
                  ></div>{" "}
                  <div className="font-bold text-xl my-2 flex justify-center items-center">
                    Tattoo{" "}
                  </div>
                </Link>
              </div>
            </div>
            {/*//! WATERCOLOR*/}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="max-w-sm hover:scale-110  rounded-3xl shadow-lg shadow-slate-500 dark:shadow-[#040c16] p-2 bg-slate-200 text-[var(--color3)] hover:bg-slate-300/90 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300">
                <Link to="/watercolor">
                  <div
                    style={{ backgroundImage: `url(${waterColors})` }}
                    className="group container rounded-3xl flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[180px] sm:h-[300px]"
                  ></div>
                  <div className="font-bold text-xl my-2 flex justify-center items-center">
                    Watercolor
                  </div>
                </Link>
              </div>
            </div>
            {/*//! PORTRAIT*/}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="max-w-sm hover:scale-110  rounded-3xl shadow-lg shadow-slate-500 dark:shadow-[#040c16] p-2 bg-slate-200 text-[var(--color3)] hover:bg-slate-300/90 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300">
                <Link to="/portrait">
                  <div
                    style={{ backgroundImage: `url(${portraits})` }}
                    className="group container rounded-3xl flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[180px] sm:h-[300px]"
                  ></div>
                  <div className="font-bold text-xl my-2 flex justify-center items-center">
                    Portrait
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
