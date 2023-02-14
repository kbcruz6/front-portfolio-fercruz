import React from "react";
import profileImg from "../assets/ProfilePic.jpeg";

const About = () => {
  return (
    <div className="bg-[var(--color2)] dark:bg-transparent">
      <div
        name="about"
        className="w-full h-screen text-[var(--color4)] duration-300 sm:rounded-bl-full rounded-tr-[8000px] shadow-lg shadow-[var(--color3)] bg-[var(--color1)] dark:shadow-none dark:bg-transparent dark:text-white"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full px-4 ">
            <div className="text-center pb-8 ">
              <h2 className="text-4xl font-bold inline text-[var(--color3)] border-b-4 border-[var(--color4)] dark:text-white dark:border-orange-500">
                About me 👩🏻‍🎨
              </h2>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 sm:items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex sm:justify-end justify-center"
            >
              <img
                src={profileImg}
                className="w-[200px] shadow-lg dark:shadow-none shadow-slate-600 sm:w-[250px] sm:h-[250px] h-[200px] rounded-br-full sm:rounded-bl-full rounded-tl-full sm:rounded-tr-none rounded-tr-full rounded-bl-none flex"
              ></img>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="text-justify"
            >
              <p>
                I am a multidisciplinary artist with a passion for creating
                impactful, meaningful artwork. As a muralist, tattoo artist and
                portraitist, I have honed my skills to produce works that not
                only aesthetically pleasing but also deeply personal and
                thought-provoking.{" "}
                <p className="my-2">
                  With a background in fine arts, university studies and a love
                  for travel, I bring a unique perspective to my art that draws
                  inspiration from my experiences and the world around me.
                </p>
                <p className="my-2">
                  Fluent in English, Spanish and Portuguese, I am able to
                  connect with a diverse range of people and bring their stories
                  to life through my work.
                </p>
                <p>Welcome to my creative journey.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
