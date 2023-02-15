//! REACT, NAVIGATION, CONTEXT, THEME
import React, { useEffect, useState, useContext, Fragment } from "react";
import { Link as LinkPages, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../index.css";
import { ThemeContext } from "../context/ThemeContext";
//! ICONS
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

//! DROPDOWN
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const { checked, onToggle } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const location = useLocation();
  const [isShowing, setIsShowing] = useState(false);

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={
        window.innerWidth < 800
          ? { backgroundColor: "transparent" }
          : { backgroundColor: `${color}` }
      }
      className="flex fixed w-full h-[60px]  justify-end items-center px-4 bottom-0 lg:top-0 z-10 ease-in duration-300 text-white dark:text "
    >
      {/*//! Menu */}
      {location.pathname === "/" ? (
        <ul
          style={{ color: `${textColor}` }}
          className=" hidden lg:flex sm:text-xl justify-center items-center"
        >
          {/*//! HOME  */}
          <li className="relative group hover:opacity-90 px-0 mx-2 uppercase ">
            <Link to="home" smooth={true} duration={500}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          {/*//! GALLERY  */}
          <li className="relative group hover:opacity-90 px-0 mx-2 uppercase">
            <Link to="gallery" smooth={true} duration={500}>
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          {/*//! CATTEGORIES  */}
          <li className="relative group px-0 mx-2 ">
            {/*//* DROPDOWN WITH CATEGORIES  */}

            <Menu
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              as="div"
              className="relative group inline-block text-left"
            >
              <Link to="categories" smooth="true" duration={300}>
                <Menu.Button className=" inline-flex w-full justify-center text-white focus:outline-none uppercase">
                  Categories
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </Link>
              <Transition
                show={isShowing}
                // onMouseHover={() => setIsShowing(true)}
                // onMouseLeave={() => setIsShowing(false)}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute group-hover:block right-0 z-10 mt-0 w-36 text-white origin-top-right rounded-md bg-[var(--color3)] dark:bg-black focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <LinkPages
                          to="/muralism"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Muralism
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <LinkPages
                          to="/tattoo"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Tattoo
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <LinkPages
                          to="/watercolor"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Watercolor
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <LinkPages
                          to="/portrait"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Portrait
                        </LinkPages>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/*//*-------------------------------------------------------------------------------  */}
          </li>

          {/*//! ABOUT  */}
          <li className="relative group hover:opacity-90 px-0 mx-2 uppercase">
            <Link to="about" smooth={true} duration={500}>
              Me
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color1)] dark:bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          {/*//! TOGGLE SWITCH  */}
          <div className="flex justify-center items-center p-4">
            <div className=" relative group hover:opacity-90 px-0 mx-2">
              <input
                onChange={onToggle}
                id="switch"
                type="checkbox"
                className="switch-checkbox hidden"
                checked={checked}
                onClick={handleNav}
              />
              <label
                className={
                  checked
                    ? "switch-label flex items-center bg-[var(--color1)] w-[45px] h-[25px] rounded-full relative cursor-pointer "
                    : "switch-label flex items-center bg-slate-300 dark:bg-orange-500 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                }
                htmlFor="switch"
              >
                <span
                  className={
                    checked
                      ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] light "
                      : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] moon "
                  }
                />
              </label>
            </div>
          </div>
        </ul>
      ) : (
        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex sm:text-xl justify-center items-center"
        >
          <li className="uppercase">
            <LinkPages to="/">Home</LinkPages>
          </li>
          {/*//* DROPDOWN WITH CATEGORIES  */}
          <Menu
            onMouseEnter={() => setIsShowing(true)}
            as="div"
            className="relative inline-block text-left"
          >
            <div>
              <Menu.Button className="uppercase inline-flex w-full justify-center px-4 py-2 text-white focus:outline-none">
                Categories
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              show={isShowing}
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-0 w-40 text-white origin-top-right rounded-md bg-[var(--color3)] dark:bg-black focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <LinkPages
                        to="/muralism"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Muralism
                      </LinkPages>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <LinkPages
                        to="/tattoo"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Tattoo
                      </LinkPages>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <LinkPages
                        to="/watercolor"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Watercolor
                      </LinkPages>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <LinkPages
                        to="/portrait"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Portrait
                      </LinkPages>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/*//*-------------------------------------------------------------------------------  */}
          {/*//! TOGGLE SWITCH  */}
          <div className="flex justify-center items-center p-4">
            <div className=" relative group hover:opacity-90 px-0 mx-2">
              <input
                onChange={onToggle}
                id="switch"
                type="checkbox"
                className="switch-checkbox hidden"
                checked={checked}
                onClick={handleNav}
              />
              <label
                className={
                  checked
                    ? "switch-label flex items-center bg-[var(--color1)] w-[45px] h-[25px] rounded-full relative cursor-pointer "
                    : "switch-label flex items-center bg-slate-300 dark:bg-orange-400 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                }
                htmlFor="switch"
              >
                <span
                  className={
                    checked
                      ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] light "
                      : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] moon "
                  }
                />
              </label>
            </div>
          </div>
        </ul>
      )}

      {/*//! MOBILE NAVBAR  */}
      {/*//! Mobile Button */}
      <div
        onClick={handleNav}
        className="lg:hidden z-10 cursor-pointer bg-black text-white p-2 rounded-full"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/*//! Mobile Menu  */}
      <div
        className={
          nav
            ? "lg:hidden absolute left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "lg:hidden absolute left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        {location.pathname === "/" ? (
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="home" smooth="true">
                Home
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="gallery" smooth="true">
                Gallery
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="categories" smooth="true">
                Categories
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link onClick={handleNav} to="about" smooth="true">
                About Me
              </Link>
            </li>
            {/*//! TOGGLE SWITCH  */}
            <div className="flex justify-center items-center p-4">
              <div className=" relative group hover:opacity-90 px-0 mx-2">
                <input
                  onChange={onToggle}
                  id="switch"
                  type="checkbox"
                  className="switch-checkbox hidden"
                  checked={checked}
                  onClick={handleNav}
                />
                <label
                  className={
                    checked
                      ? "switch-label flex items-center bg-[var(--color1)] w-[45px] h-[25px] rounded-full relative cursor-pointer "
                      : "switch-label flex items-center bg-slate-300 dark:bg-orange-400 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                  }
                  htmlFor="switch"
                >
                  <span
                    className={
                      checked
                        ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] light "
                        : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] moon "
                    }
                  />
                </label>
              </div>
            </div>
          </ul>
        ) : (
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <LinkPages onClick={handleNav} to="/">
                Home
              </LinkPages>
            </li>
            {/*//* DROPDOWN WITH CATEGORIES  */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center text-4xl px-4 py-2 text-white focus:outline-none">
                  Categories
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0 w-56 text-white text-center origin-top-right rounded-md bg-slate-900 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item className="text-3xl">
                      {({ active }) => (
                        <LinkPages
                          onClick={handleNav}
                          to="/muralism"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Muralism
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item className="text-3xl">
                      {({ active }) => (
                        <LinkPages
                          onClick={handleNav}
                          to="/tattoo"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Tattoo
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item className="text-3xl">
                      {({ active }) => (
                        <LinkPages
                          onClick={handleNav}
                          to="/watercolor"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Watercolor
                        </LinkPages>
                      )}
                    </Menu.Item>
                    <Menu.Item className="text-3xl">
                      {({ active }) => (
                        <LinkPages
                          onClick={handleNav}
                          to="/portrait"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Portrait
                        </LinkPages>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/*//*-------------------------------------------------------------------------------  */}
            {/*//! TOGGLE SWITCH  */}
            <div className="flex justify-center items-center p-4">
              <div className=" relative group hover:opacity-90 px-0 mx-2">
                <input
                  onChange={onToggle}
                  id="switch"
                  type="checkbox"
                  className="switch-checkbox hidden"
                  checked={checked}
                  onClick={handleNav}
                />
                <label
                  className={
                    checked
                      ? "switch-label flex items-center bg-[var(--color1)] w-[45px] h-[25px] rounded-full relative cursor-pointer "
                      : "switch-label flex items-center bg-slate-300 dark:bg-orange-400 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                  }
                  htmlFor="switch"
                >
                  <span
                    className={
                      checked
                        ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] light "
                        : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[2px] moon "
                    }
                  />
                </label>
              </div>
            </div>
          </ul>
        )}
      </div>

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

/*
const menuTitle = "Categories";
  const linksArray = [
    // [[title: string, href: string], ...]
    ["All categories", "categories"],
    ["About", "/about"],
    ["Blog", "/blog"],
  ];

  let timeout; // NodeJS.Timeout
  const timeoutDuration = 400;

  const buttonRef = useRef(null); // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClick = (open) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };

  const LINK_STYLES = classNames(
    "py-5 px-1 w-48",
    "text-base text-gray-900 uppercase font-bold",
    "transition duration-500 ease-in-out",
    "bg-gray-100 hover:text-blue-700 hover:bg-blue-100"
  );
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });









  <Popover className="relative mx-auto w-48">
              {({ open }) => (
                <div
                  onMouseEnter={() => onHover(open, "onMouseEnter")}
                  onMouseLeave={() => onHover(open, "onMouseLeave")}
                  className="flex flex-col"
                >
                  <Popover.Button ref={buttonRef}>
                    <div
                      className={classNames(
                        open ? "text-blue-800" : "text-gray-800",
                        "bg-white rounded-md",
                        "border-2 border-black border-solid",
                        "flex justify-center",
                        LINK_STYLES
                      )}
                      onClick={() => handleClick(open)}
                    >
                      <span className="uppercase">
                        {menuTitle} ({openState ? "open" : "closed"})
                        <ChevronDownIcon
                          className={classNames(
                            open
                              ? "text-gray-600 translate-y-6"
                              : "text-gray-400",
                            "h-9 w-9 inline-block",
                            "transform transition-all duration-500"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Popover.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel static className="z-10 w-48 mx-auto">
                      <div
                        className={classNames(
                          "relative grid space-y-[2px]",
                          "bg-white border-2 border-gray-300 border-solid",
                          "divide-y-2 rounded-md text-center"
                        )}
                      >
                        {linksArray.map(([title, href]) => (
                          <Fragment key={"PopoverPanel<>" + title + href}>
                            <a href={href} className={LINK_STYLES}>
                              {title}
                            </a>
                          </Fragment>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              )}
            </Popover>
*/
