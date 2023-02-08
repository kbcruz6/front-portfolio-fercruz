import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const SocialMediaBottom = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const changeOpacity = () => {
      if (window.scrollY >= 90) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", changeOpacity);
  }, []);
  return (
    <div>
      {/*//! Social media horizontal  */}
      <div className="lg:hidden w-full">
        <ul className="flex fixed flex-row top-0 items-center justify-center left-0 right-0">
          {/*//! LinkedIn  */}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-blue-600 hover:scale-125 rounded-3xl shadow-lg  shadow-black">
            <a
              href="https://www.linkedin.com/in/maria-fernanda-cruz-0bb077165/"
              className="flex justify-between  items-center w-full text-gray-300 "
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>{" "}
          {/*//! LinkedIn  */}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-orange-500 hover:scale-125 rounded-3xl shadow-lg  shadow-black">
            <a
              href="https://www.instagram.com/fercruz.arte/"
              className="flex justify-between  items-center w-full text-gray-300 "
              target="_blank"
            >
              <BsInstagram size={30} />
            </a>
          </li>{" "}
          {/*//! Email  */}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-[var(--color4)] hover:scale-125 rounded-3xl shadow-lg  shadow-black">
            <a
              href="mailto:mfercruzw@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          {/*//! Phone  */}
          <li className="w-[60px] h-[50px] flex justify-between items-center duration-300 bg-[#25D366] hover:scale-125 rounded-3xl shadow-lg  shadow-black">
            <a
              href="http://api.whatsapp.com/send?phone=97439978605"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
            >
              <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/*//! ARROW CIRCLE UP  */}
      <div style={{ opacity: `${opacity}` }}>
        <Link to="home" smooth={true} duration={500} className="">
          <FaArrowCircleUp
            className="minlg:hidden fixed z-50 bottom-10 right-10 cursor-pointer  duration-300 hover:scale-110 text-[var(--color3)] "
            size={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaBottom;
