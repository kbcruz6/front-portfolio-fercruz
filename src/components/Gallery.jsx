import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import fer1 from "../assets/1.jpeg";

const Gallery = () => {
  const slides = [
    // {
    //   url: "../assets/1.jpeg",
    // },
    {
      url: "https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
    },
  ];

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
  };

  return (
    <div
      name="gallery"
      className="max-w-[1000px] h-screen w-full m-auto pt-28 pb-16 px-4 relative"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/*//! Left arrow  */}
      <div className="absolute top-[50%] translate-y-[-50%] sm:text-[var(--color3)] sm:bg-transparent bg-black text-[var(--color3)] sm:-left-8 -left-1 text-2xl rounded-full p-2 cursor-pointer hover:scale-110 duration-300">
        <FaArrowCircleLeft onClick={prevSlide} />
      </div>
      {/*//! Right arrow  */}
      <div className="absolute top-[50%] translate-y-[-50%] sm:text-[var(--color3)] sm:bg-transparent bg-black text-[var(--color3)] sm:-right-8 -right-1 text-2xl rounded-full p-2 cursor-pointer hover:scale-110 duration-300">
        <FaArrowCircleRight onClick={nextSlide} />
      </div>

      {/*//! DOTS  */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl text-[var(--color3)]"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
