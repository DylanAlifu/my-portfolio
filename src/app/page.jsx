"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-96 md:h-full lg:h-full lg:w-1/2 relative mb-8 lg:mb-0">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
            Crafting Digital Experiences: My Creative Journey
          </h1>
          {/* DESC */}
          <p className="text-sm md:text-xl text-center lg:text-left px-4 lg:px-0">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of HTML,
            JavaScript, and React, my portfolio showcases a diverse collection
            of high-performance web applications. Each project reflects my
            commitment to excellence and my passion for creating seamless user
            experiences. Explore my work and see how I blend aesthetic design
            with cutting-edge technology to bring visionary ideas to life.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 md:justify-center lg:justify-start">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
