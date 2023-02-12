import React, { useState } from "react";

//! SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "../../src/index.css";

//! IMGS
import fer1 from "../assets/1.jpeg";
import fer4 from "../assets/cuadrada2.jpeg";
import fer6 from "../assets/cuadrada4.jpeg";
import fer7 from "../assets/cuadrada5.jpeg";
import fer17 from "../assets/foto10.jpeg";
import fer18 from "../assets/foto11.jpeg";
import fer2 from "../assets/foto3.jpeg";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);
const Gallery = () => {
  const slides = [fer4, fer1, fer6, fer7, fer17, fer18, fer2];

  return (
    <div
      name="gallery"
      className="h-screen w-full flex justify-center items-center sm:px-28"
    >
      <Swiper
        navigation={true}
        // pagination={true}
        spaceBetween={50}
        grabCursor={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 3}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            // slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            // width: 768,
            // height: 500,
            // slidesPerView: 3,
          },
        }}
        effect="coverflow"
        autoHeight={true}
        centeredSlides={true}
        initialSlide={1}
        zoom={true}
        speed={500}
        autoplay={{
          delay: 1300,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          padding: 20,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          <img src={slides[0]} className="w-full rounded-2xl sm:h-auto "></img>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[1]} className="w-full rounded-2xl"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[2]} className="w-full rounded-2xl"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[3]} className="w-full rounded-2xl"></img>
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[4]} className="w-full rounded-2xl"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[5]} className="w-full rounded-2xl"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover place-self-center sm:max-w-[300px] sm:max-h-[400px]  shadow-lg shadow-black rounded-2xl ">
          {" "}
          <img src={slides[6]} className="w-full rounded-2xl"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import { RxDotFilled } from "react-icons/rx";
// const [bigDot, setBigDot] = useState(
//   "cursor-pointer text-2xl text-[var(--color4)] dark:text-orange-500 duration-300 scale-150"
// );

// const [currentIndex, setCurrentIndex] = useState(0);
// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//   setCurrentIndex(newIndex);
// };
// const nextSlide = () => {
//   const isLastSlide = currentIndex === slides.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };
// const goToSlide = (slideIndex) => {
//   setCurrentIndex(slideIndex);
//   setBigDot(
//     "cursor-pointer text-2xl text-[var(--color4)] dark:text-orange-500 duration-300 scale-150"
//   );
// };

// <div className="flex flex-col justify-center items-center h-screen w-full">
//   <div
//     name="gallery"
//     className="max-w-[700px] h-full w-full m-auto pt-28 pb-16 px-4 relative"
//   >
{
  /*//! IMG  */
}
//  <div
//  style={{ backgroundImage: `url(${slides[currentIndex]})` }}
//  className=" h-full w-full rounded-2xl bg-center bg-cover place-self-center duration-500 shadow-lg shadow-black"
// ></div>
{
  /*//! Left arrow  */
}
{
  /* <div className=" shadow-lg shadow-black absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-left-8 -left-1 text-2xl rounded-full p-0 cursor-pointer hover:scale-110 duration-300">
 <FaArrowCircleLeft onClick={prevSlide} />
</div> */
}
{
  /*//! Right arrow  */
}
{
  /* <div className=" shadow-md shadow-black absolute top-[50%] sm:text-[var(--color4)] dark:text-orange-500 sm:bg-transparent bg-black text-[var(--color4)]  sm:-right-8 -right-1 text-2xl rounded-full p-0 cursor-pointer hover:scale-110 duration-300">
 <FaArrowCircleRight onClick={nextSlide} />
</div> */
}
{
  /*//! DOTS  */
}
{
  /* <div className="flex top-4 justify-center py-2">
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
</div> */
}
// </div>
