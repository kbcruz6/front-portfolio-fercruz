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

const Gallery = () => {
  const slides = [
    fer1,
    fer2,
    fer3,
    fer4,
    fer5,
    fer6,
    fer7,
    // {
    //   url: "https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
    // },
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
    <div
      name="gallery"
      className="max-w-[1000px] h-screen w-full m-auto pt-28 pb-16 px-4 relative"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/*//! Left arrow  */}
      <div className="absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-left-8 -left-1 text-2xl rounded-full p-2 cursor-pointer hover:scale-110 duration-300">
        <FaArrowCircleLeft onClick={prevSlide} />
      </div>
      {/*//! Right arrow  */}
      <div className="absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-right-8 -right-1 text-2xl rounded-full p-2 cursor-pointer hover:scale-110 duration-300">
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
  );
};

export default Gallery;
