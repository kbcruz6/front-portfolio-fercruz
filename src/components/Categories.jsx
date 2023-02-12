import React from "react";
import muralism from "../assets/muralism/m-gorila.jpeg";
import tattoo from "../assets/tattoo/t-medusa.jpeg";
import waterColors from "../assets/watercolor/w-ave1.jpeg";
import portraits from "../assets/portrait/p-perro2.jpeg";
import { Link } from "react-router-dom";

const slides = [muralism, tattoo, waterColors, portraits];
const Categories = () => {
  return (
    <div className="bg-slate-100 dark:bg-transparent">
      <div
        name="categories"
        className="w-full md:h-screen text-slate-600 duration-300 bg-white  shadow-lg shadow-slate-400 dark:shadow-none dark:text-orange-200 dark:bg-transparent "
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
                <Link to="/muralism" target={"_blank"}>
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
                <Link to="/tattoo" target={"_blank"}>
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
                <Link to="/watercolor" target={"_blank"}>
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
                <Link to="/portrait" target={"_blank"}>
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
{
  /* <div 
    //   name="categories"
    //   className="h-screen w-full flex flex-col items-center justify-center pt-28"
    // >
    //   <h1 className="text-white text-4xl font-bold border-b-4 border-orange-500 mb-10">
    //     Categories
    //   </h1>

    //   <div className="flex flex-row flex-wrap p-4 gap-6">*/
}
//     {/*//! MURALISM
//     <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
//       <div className="bg-center bg-cover place-self-center max-w-sm  max-h-[180px] sm:h-[300px] shadow-lg shadow-black rounded-3xl p-3 hover:scale-110 duration-300">
//         <Link target={"_blank"} to="/muralism">
//           <img
//             src={slides[0]}
//             className="w-full h-full rounded-3xl bg-cover"
//           ></img>
//           <h2 className="text-white text-xl text-center pt-1">Muralism</h2>
//         </Link>
//       </div>
//     </div>
//     {/*//! TATTOO
//     <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
//       <div className="bg-center bg-cover place-self-center max-w-sm max-h-[180px] sm:h-[300px]  shadow-lg shadow-black rounded-3xl p-3  hover:scale-110 duration-300">
//         {" "}
//         <Link target={"_blank"} to="/tattoo">
//           <img
//             src={slides[1]}
//             className="w-full h-full rounded-3xl bg-cover"
//           ></img>
//           <h2 className="text-white text-xl text-center pt-1">Tattoo</h2>
//         </Link>
//       </div>
//     </div>
//     {/* //! WATERCOLOR
//     <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
//       <div className="bg-center bg-cover place-self-center max-w-sm max-h-[180px] sm:h-[300px]  shadow-lg shadow-black rounded-3xl p-3 hover:scale-110 duration-300">
//         {" "}
//         <Link target={"_blank"} to="/watercolor">
//           <img
//             src={slides[2]}
//             className="w-full h-full rounded-3xl bg-cover"
//           ></img>
//           <h2 className="text-white text-xl text-center pt-1">
//             Watercolor
//           </h2>
//         </Link>
//       </div>
//     </div>
//     //! PORTRAIT
//     <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
//       <div className="bg-center bg-cover place-self-center max-w-sm max-h-[180px] sm:h-[300px]  shadow-lg shadow-black rounded-3xl p-3 hover:scale-110 duration-300">
//         {" "}
//         <Link target={"_blank"} to="/portrait">
//           <img
//             src={slides[3]}
//             className="w-full h-full rounded-3xl bg-cover"
//           ></img>
//           <h2 className="text-white text-xl text-center pt-1">Portrait</h2>
//         </Link>
//       </div>
//     </div>{" "}
//   </div>
//   {/* </Swiper> */}
//   {/* </div> */}
// </div>
