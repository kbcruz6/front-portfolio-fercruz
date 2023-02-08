import React, { createContext, useState, useContext } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import "../index.css";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { checked, onToggle } = useContext(ThemeContext);

  return (
    <div className="fixed w-full h-[40px] flex justify-center items-center px-4 text-[var(--color1)] bg-[var(--color4)] shadow-md  dark:bg-slate-900 dark:text-orange-200 minsm:bottom-0 z-50">
      {/*//! Menu */}
      <ul className="font-bold flex">
        {/*//! HOME  */}
        <li className="relative group hover:opacity-90 px-0 mx-2 ">
          <Link to="home" smooth={true} duration={500} className="">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/*//! WORK  */}
        <li className="relative group hover:opacity-90 px-0 mx-2">
          <Link to="work" smooth={true} duration={500}>
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/*//! ABOUT  */}
        <li className="relative group hover:opacity-90 px-0 mx-2">
          <Link to="about" smooth={true} duration={500}>
            Me
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/*//! SKILLS  */}
        <li className="relative group hover:opacity-90 px-0 mx-2">
          <Link to="skills" smooth={true} duration={500}>
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/*//! CONTACT  */}
        <li className="relative group hover:opacity-90 px-0 mx-2">
          <Link to="contact" smooth={true} duration={500}>
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
          </Link>
        </li>

        {/*//! TOGGLE SWITCH  */}
        <li className="relative group hover:opacity-90 px-0 mx-2">
          <input
            onChange={onToggle}
            id="switch"
            type="checkbox"
            className="switch-checkbox hidden"
            checked={checked}
          />
          <label
            className={
              checked
                ? "switch-label flex items-center bg-slate-300 dark:bg-orange-500 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                : "switch-label flex items-center bg-[var(--color2)] w-[45px] h-[25px] rounded-full relative cursor-pointer "
            }
            htmlFor="switch"
          >
            <span
              className={
                checked
                  ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] moon "
                  : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] light "
              }
            />
          </label>
        </li>
      </ul>

      {/*//! Hamburguer */}
      {/* <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer hover:opacity-90"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}
      {/*//! Mobile menu */}
      {/* <ul
        className={
          "absolute w-full h-[100px] bg-[#0a192f] flex flex-row justify-center items-center mx-auto"
        }
      >
        <li className="py-2 text-lg hover:opacity-80">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-2 text-lg hover:opacity-80">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-2 text-lg hover:opacity-80">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-2 text-lg hover:opacity-80 ">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-2 text-lg hover:opacity-80 ">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}

      {/*//! Social media vertical */}
      <div className="">
        <div className="hidden lg:flex fixed flex-col lg:top-[36%] lg:left-0">
          <ul>
            {/*//! LinkedIn  */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] pl-[25px] duration-300 bg-blue-600 rounded-3xl shadow-lg shadow-black">
              <a
                href="https://www.linkedin.com/in/maria-fernanda-cruz-0bb077165/"
                className="flex justify-between items-center w-full text-white"
                target="_blank"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>{" "}
            {/*//! Instagram  */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] pl-[25px] duration-300 bg-orange-500 rounded-3xl shadow-lg shadow-black">
              <a
                href="https://www.instagram.com/fercruz.arte/"
                className="flex justify-between items-center w-full text-white"
                target="_blank"
              >
                Instagram <BsInstagram size={30} />
              </a>
            </li>{" "}
            {/*//! Email  */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] pl-[25px] rounded-3xl duration-300 bg-[var(--color4)]  shadow-lg shadow-black">
              <a
                href="mailto:mfercruzw@gmail.com"
                target="_blank"
                className="flex justify-between items-center w-full text-white"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>{" "}
            {/*//! CV  */}
            {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] pl-[25px] duration-300 bg-[var(--color4)] rounded-3xl shadow-lg shadow-black">
              <a
                href="https://github.com/kbcruz6/kbcruz6.github.io/raw/main/CvAgustinCruz/CV%20Fernanda%20Cruz.pdf"
                className="flex justify-between items-center w-full text-white"
              >
                Resume <FiPaperclip size={30} />
              </a>
            </li> */}
            {/*//! Phone  */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-15px] pl-[25px] duration-300 bg-[#25D366] rounded-3xl shadow-lg shadow-black">
              <a
                href="http://api.whatsapp.com/send?phone=97439978605"
                className="flex justify-between items-center w-full text-white"
                target="_blank"
              >
                WhatsApp
                <BsWhatsapp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
