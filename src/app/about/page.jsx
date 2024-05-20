/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../../components/brain";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
  });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    margin: "-100px",
  });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-14 justify-center">
            {/* BIO TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIO DESCRIPTION */}
            <p className="text-lg">
              With over 5 years in the IT industry, I transitioned from a
              meticulous Test Automation Engineer to a passionate Frontend
              Developer. My journey started with mastering tools like Selenium
              WebDriver, Postman, and REST Assured, which sharpened my
              problem-solving skills and attention to detail. A year ago, driven
              by my deep-seated passion for the development world, I embraced
              frontend development, diving into the dynamic realm of React. I
              love crafting user-friendly interfaces and ensuring seamless user
              experiences. My ability to bridge the gap between development and
              quality assurance highlights my versatile skill set and dedication
              to excellence. I thrive on continuous learning and am excited
              about the endless possibilities in the ever-evolving field of
              frontend development. Let's create something amazing together!
            </p>
            {/* BIO QUOTE */}
            <span className="italic">
              Quality is my code's best friend—turning ideas into rock-solid
              solutions.
            </span>

            {/* BIO SIGN SVG */}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="185"
                height="77"
                viewBox="0 0 316.000000 149.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2585 1460 c-67 -20 -238 -81 -244 -86 -2 -2 -2 -7 2 -10 3 -3 45 8
94 26 152 55 176 61 265 70 100 10 350 -2 391 -19 l29 -11 -26 -31 c-92 -109
-386 -274 -591 -331 -79 -22 -179 -24 -273 -6 -59 11 -64 11 -94 -12 -30 -22
-33 -23 -61 -7 -35 21 -66 21 -91 2 -11 -8 -27 -15 -35 -14 -11 0 -12 2 -3 6
6 2 12 11 12 20 0 20 -34 12 -161 -38 -118 -47 -154 -48 -94 -4 136 100 158
129 139 179 -9 24 -33 20 -115 -18 -99 -45 -209 -110 -491 -288 -205 -129
-240 -148 -257 -138 -35 18 -42 45 -35 123 l6 73 72 35 c39 20 88 43 109 52
21 10 36 21 33 25 -3 5 -31 14 -63 21 -32 7 -71 18 -87 24 -45 17 -133 115
-168 189 -49 102 -58 92 -58 -66 0 -101 -5 -158 -21 -228 -27 -116 -35 -134
-55 -117 -11 9 -18 9 -26 1 -9 -9 -7 -15 8 -26 10 -8 17 -16 14 -18 -3 -2 -61
-33 -130 -67 -263 -134 -356 -210 -186 -151 51 17 186 40 239 40 16 0 10 -15
-34 -100 l-52 -100 -126 -82 c-69 -44 -156 -101 -192 -125 -37 -23 -98 -73
-138 -110 -55 -53 -71 -74 -71 -96 0 -38 22 -43 89 -22 81 25 129 51 190 103
72 61 197 205 232 268 19 34 43 58 71 74 24 13 103 61 176 107 127 79 136 82
208 89 41 4 77 11 81 17 3 6 -4 19 -17 29 -12 10 -21 20 -19 22 37 32 540 338
638 389 137 71 170 78 150 33 -12 -26 -124 -122 -183 -157 -43 -25 -46 -44 -8
-52 45 -9 111 9 195 51 4 2 6 -2 5 -10 -5 -22 76 -12 139 16 67 31 78 32 97 5
13 -19 18 -20 47 -10 18 6 41 19 51 27 13 12 26 15 50 9 144 -32 276 -20 373
34 28 15 66 33 85 41 125 47 339 176 427 257 23 21 43 49 45 63 5 40 -46 48
-287 49 -175 0 -220 -3 -270 -19z m-1727 -237 c17 -27 53 -69 79 -95 45 -44
68 -54 158 -73 l30 -7 -45 -17 c-25 -10 -107 -52 -183 -94 -75 -43 -139 -77
-142 -77 -2 0 3 19 11 43 25 68 54 232 54 302 0 36 2 65 4 65 2 0 18 -21 34
-47z m37 -335 c-9 -30 -48 -97 -74 -128 -19 -23 -20 -24 -21 -5 0 11 -9 34
-20 52 l-19 32 62 35 c73 42 80 43 72 14z m15 -93 c0 -14 11 -37 26 -51 24
-25 24 -27 7 -40 -18 -13 -113 -20 -113 -8 0 13 65 124 72 124 5 0 8 -11 8
-25z m-221 -37 c-12 -29 -23 -58 -26 -64 -2 -6 -41 -14 -86 -18 -45 -4 -99
-11 -119 -15 -21 -5 -38 -8 -38 -6 0 1 44 25 98 53 53 28 117 62 142 76 25 14
46 26 47 26 2 0 -7 -24 -18 -52z m82 -38 c4 -23 0 -25 -42 -30 l-47 -6 13 36
c7 19 18 49 25 65 l12 30 18 -35 c10 -19 20 -46 21 -60z m12 -87 c3 -16 0 -31
-6 -35 -7 -4 -54 -32 -105 -63 l-92 -55 47 90 47 90 52 0 c48 0 52 -2 57 -27z
m62 8 c-34 -21 -38 -21 -29 3 3 9 17 16 33 16 l26 0 -30 -19z m-347 -263 c-13
-23 -77 -97 -143 -163 -122 -124 -125 -126 -246 -164 -100 -31 -75 8 92 145
54 44 306 222 317 224 2 0 -7 -19 -20 -42z"
                  />
                </g>
              </svg>
            </div>
            {/* BIO SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Material UI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="flex flex-col"
            >
              {/* EXPERIENCE LIST ITEM - 1 */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Frontend Developer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Enhanced user engagement by optimizing training content
                    management application performance. Managed Agile sprints to
                    reduce feature delivery times and increase team
                    productivity. Conducted code reviews, followed Git best
                    practices, and wrote technical documentation for API
                    integration and system upgrades. Improved UI with advanced
                    React hooks, boosting responsiveness and accessibility for
                    users with disabilities. Collaborated with UX designers and
                    developers to maintain high graphical standards and ensure
                    API compatibility, expanding the user base.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Boeing
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM - 2 */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Development Engineer in Test
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Designed flexible test frameworks for frontend and backend,
                    promoting testing coverage and decreasing execution time.
                    Developed test plans for key projects, enhancing
                    cross-functional collaboration to cut defect resolution time
                    and shorten time-to-market. Conducted root cause analyses on
                    major incidents annually, reducing defect recurrence and
                    improving product reliability. Mentored junior QA engineers,
                    boosting team productivity and promoting professional
                    development.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2022 - 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Boeing
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - 3 */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Test Automation Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Established and maintained a Java-Selenium-based Automation
                    Framework, automating test scenarios across Web, REST API,
                    and Mobile applications, significantly reducing manual
                    testing efforts and improving test efficiency. Executed
                    comprehensive database testing with SQL and JDBC, ensuring
                    data integrity and functionality. Authored and disseminated
                    best practices and standards across a team of automation
                    engineers, ensuring consistency and boosting productivity.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2020 - 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Mobile Integration Workgroup
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM - 4 */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Test Automation Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Crafted a Behavior Driven Framework from scratch using JAVA
                    and Cucumber, enabling structured and efficient
                    scenario-based testing. Reported and documented software
                    defects in Azure DevOps, playing a pivotal role in reducing
                    bug resolution time through collaborative efforts with
                    developers. Championed API testing execution, applying
                    Postman and REST-Assured to conduct automated tests,
                    enhancing RESTful service reliability.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2020 - 2020
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Boeing
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM - 5 */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Quality Assurance Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Played a crucial role in analyzing user stories,
                    spearheading defect tracking, and harmonizing development
                    with testing operations, leading to a significant decrease
                    in production defects. Managed and maintained Automation
                    Scripts in Selenium, leveraging Java and GIT for efficient
                    resource coordination, ensuring script reliability and
                    accessibility via GitHub.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2018 - 2020
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    HealthSherpa
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
