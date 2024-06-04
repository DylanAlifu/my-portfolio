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
        {/* TEXT CONTAINER */}
        <div className="h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center order-2 lg:order-none">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
            Hi, I'm Dylan
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
        </div>

        {/* IMAGE CONTAINER */}
        <div className="h-96 md:h-full lg:h-full lg:w-1/2 relative mb-8 lg:mb-0 order-1 lg:order-none">
          <Image
            src="/profile.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
