import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import fer1 from "../assets/1.jpeg";
import fer2 from "../assets/horizontal1.jpeg";
import fer3 from "../assets/cuadrada1.jpeg";
import fer4 from "../assets/cuadrada2.jpeg";
import fer5 from "../assets/cuadrada3.jpeg";
import fer6 from "../assets/cuadrada4.jpeg";
import fer7 from "../assets/cuadrada5.jpeg";
import fer8 from "../assets/foto1.jpeg";
import fer9 from "../assets/foto2.jpeg";
import fer10 from "../assets/foto3.jpeg";
import fer11 from "../assets/foto4.jpeg";
import fer12 from "../assets/foto5.jpeg";
import fer13 from "../assets/foto6.jpeg";
import fer14 from "../assets/foto7.jpeg";
import fer15 from "../assets/foto8.jpeg";
import fer16 from "../assets/foto9.jpeg";
import fer17 from "../assets/foto10.jpeg";
import fer18 from "../assets/foto11.jpeg";
import fer19 from "../assets/foto12.jpeg";

const Gallery = () => {
  const slides = [
    fer2,
    fer4,
    fer17,
    fer18,
    fer6,
    fer7,
    fer16,
    fer10,
    fer11,
    fer12,
    fer3,
    fer14,
  ];

  const [bigDot, setBigDot] = useState(
    "cursor-pointer text-2xl text-[var(--color4)] dark:text-orange-500 duration-300 scale-150"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setBigDot(
      "cursor-pointer text-2xl text-[var(--color4)] dark:text-orange-500 duration-300 scale-150"
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div
        name="gallery"
        className="max-w-[700px] h-full w-full m-auto pt-28 pb-16 px-4 relative"
      >
        {/*//! IMG  */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className=" h-full w-full rounded-2xl bg-center bg-cover duration-500 shadow-lg shadow-black"
        ></div>
        {/*//! Left arrow  */}
        <div className=" shadow-md shadow-black absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-left-8 -left-1 text-2xl rounded-full p-0 cursor-pointer hover:scale-110 duration-300">
          <FaArrowCircleLeft onClick={prevSlide} />
        </div>
        {/*//! Right arrow  */}
        <div className=" shadow-md shadow-black absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-right-8 -right-1 text-2xl rounded-full p-0 cursor-pointer hover:scale-110 duration-300">
          <FaArrowCircleRight onClick={nextSlide} />
        </div>
        {/*//! DOTS  */}
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={
                slideIndex === currentIndex
                  ? bigDot
                  : "cursor-pointer text-2xl text-[var(--color4)] dark:text-orange-500 duration-300"
              }
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
