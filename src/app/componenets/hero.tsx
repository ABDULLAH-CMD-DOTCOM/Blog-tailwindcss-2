import { Heebo } from "next/font/google";
import Image from "next/image";
import React from "react";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div data-aos="zoom-in" className="my-[66px] p-6 mx-auto md:w-[1030] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* text div */}

      <div data-aos="zoom-in"  className="w-[90%] md:w-[521px] md:h-[305px] flex flex-col md:justify-between items-start justify-evenly">
        <h1
        data-aos="zoom-in"
          className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myBlack `}
        >
        Hi! Ia am  Muhammad Abdullah  <br />
        | Tech Enthusiast |
        </h1>
        <p
          className={`${heebo.className} text-myBlack text-[16px] font-medium`}
        >
          Welcome to my corner of the internet, where I share my thoughts, experiences, and ideas to inspire and empower you.
        </p>

        <button
          className={`${heebo.className} w-[205px] h-[50px] bg-myPink text-white text-[18] font-medium rounded-md shadow-md shadow-myBlack/45`}
        >
          Download Resume
        </button>
      </div>

      {/* image div */}
      <div data-aos="zoom-in" className="w-[292px] h-[299px] relative ">
        <Image data-aos="zoom-in"
          className="z-50 rounded-full"
          src={"/assets/hero.jpg"}
          alt="hero-img"
          width={292}
          height={299}
        />
        <div data-aos="zoom-in" className="bg-heroSalam w-[292px] h-[299px] absolute top-2 right-2 rounded-full -z-10 " />
      </div>
    </div>
  );
};

export default Hero;
