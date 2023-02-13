import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[100px]  text-white bg-black">
      <div>© Copywrite 2023 | All rights reserved</div>
      <div>
        Created by{" "}
        <a
          className="dark:hover:text-orange-500 hover:text-[var(--color4)] duration-300 font-bold"
          href="https://portfolio-agustincruz.vercel.app/"
          target="_blank"
        >
          Agustin Cruz
        </a>
      </div>
    </div>
  );
};

export default Footer;
