import React from "react";
import { Link } from "react-scroll";
import weatherReact from "../assets/weatherReactDark.png";
import muralism from "../assets/horizontal1.jpeg";
import tattoo from "../assets/foto2.jpeg";
import waterColors from "../assets/acuarelas/ave.jpeg";
import portraits from "../assets/foto3.jpeg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full sm:h-screen text-[var(--color4)] duration-300 shadow-lg dark:shadow-none dark:text-orange-200 dark:bg-transparent "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full duration-300">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-[var(--color4)] text-[var(--color1)] dark:text-orange-200 dark:border-orange-500">
            My versatility
          </p>
        </div>
        {/*//! Card grid container */}
        <div className="grid sm:grid-cols-2  gap-4">
          {/*//! Card grid item */}
          {/*//! Muralism */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="max-w-sm rounded-3xl shadow-lg shadow-[var(--color3)]  p-2 bg-[var(--color1)] text-[var(--color3)] hover:bg-slate-50 dark:text-orange-200 dark:shadow-[#040c16] dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${muralism})` }}
              className="group container rounded-3xl flex justify-center items-center mx-auto content-div1"
            ></div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Muralism{" "}
            </div>
          </div>
          {/*//! Tattoo*/}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="max-w-sm rounded-3xl shadow-lg shadow-[var(--color3)] dark:shadow-[#040c16] p-2 bg-[var(--color1)] text-[var(--color3)] hover:bg-slate-50 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${tattoo})` }}
              className="group container rounded-3xl flex justify-center items-center mx-auto content-div1"
            ></div>
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Tattoo
            </div>
          </div>
          {/*//! Water Colors*/}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="max-w-sm rounded-3xl shadow-lg shadow-[var(--color3)] dark:shadow-[#040c16] p-2 bg-[var(--color1)] text-[var(--color3)] hover:bg-slate-50 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${waterColors})` }}
              className="group container rounded-3xl flex justify-center items-center mx-auto content-div1"
            ></div>
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Water Colors
            </div>
          </div>
          {/*//! Portraits */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="max-w-sm rounded-3xl shadow-lg shadow-[var(--color3)] dark:shadow-[#040c16] p-2 bg-[var(--color1)] text-[var(--color3)] hover:bg-slate-50 dark:text-orange-200 dark:bg-[#11294e]/50 dark:hover:bg-[#11294e]/90 duration-300"
          >
            <div
              style={{ backgroundImage: `url(${portraits})` }}
              className="group container rounded-3xl flex justify-center items-center mx-auto content-div1"
            ></div>{" "}
            <div className="font-bold text-xl my-2 flex justify-center items-center">
              Portraits{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
