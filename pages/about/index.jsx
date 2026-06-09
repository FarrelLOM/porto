import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiKotlin,
  SiBlender,
  SiCanva,
  SiCplusplus,
  SiFramer,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiPython,
          FaWordpress,
          SiCplusplus,
          SiKotlin,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiCanva, SiAdobephotoshop, SiFramer, SiBlender],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Student Research Challenge - Accepted Funds Participant",
        stage: "2024",
      },
      {
        title: "Student Research Challenge - Accepted Funds Participant",
        stage: "2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Second Internship - Basin Regional Unit",
        stage: "2025",
      },
      {
        title: "First Internship - PLN Regional Unit",
        stage: "2024",
      },
      {
        title: "Research and Development Leader - LDC",
        stage: "2023 - 2026",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certified Microsoft Office Specialist - ITCC, ITPLN",
        stage: "2023",
      },
      {
        title: "Certified Azure AI Fundamentals - ITCC, ITPLN",
        stage: "2025",
      },
      {
        title: "Computer Science Bachelor - Institute Technology of PLN",
        stage: "2026",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative h-full bg-primary/30 py-20 xl:py-32 text-center xl:text-left overflow-hidden">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:block absolute bottom-0 left-0 z-10 pointer-events-none select-none"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full relative z-20">
        <div className="flex flex-col xl:flex-row xl:items-stretch xl:h-full">
          <div className="hidden xl:block xl:w-[420px] 2xl:w-[500px]" />

          {/* content */}
          <div className="flex-1 flex flex-col justify-start xl:ml-8 xl:pl-16 xl:pr-4">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Build with <span className="text-accent">dreams</span> enhanced 
              by creativity.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0"
            >
              As a fresh graduate, I begin freelancing as a fullstack developer. Look
              forward to work with clients all over the world, I have the opportunity to
              work on a wide range of projects, from small business websites to large
              e-commerce platforms. I have a strong passion for AI and machine learning implementation
              that i have developed a lot of projects using it.
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              className="hidden md:flex md:max-w-2xl xl:max-w-none mx-auto xl:mx-0 mb-8 xl:mb-10"
            >
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience.
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Papers publication.
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={5} duration={5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects.
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={6} duration={5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Certifications.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* info */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              className="w-full max-w-[900px] mx-auto xl:mx-0"
            >
              <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 mb-4">
                {aboutData.map((item, itemI) => (
                  <div
                    key={itemI}
                    className={`${
                      index === itemI &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemI)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>

              <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start text-left">
                {aboutData[index].info.map((item, itemI) => (
                  <div
                    key={itemI}
                    className="flex flex-col md:flex-row max-w-full gap-x-2 gap-y-1 items-center md:items-start text-center md:text-left text-white/60"
                  >
                    <div className="font-light">{item.title}</div>
                    {item.stage && (
                      <>
                        <div className="hidden md:flex">-</div>
                        <div>{item.stage}</div>
                      </>
                    )}

                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 mt-2 md:mt-0">
                      {item.icons?.map((Icon, iconI) => (
                        <div key={iconI} className="text-2xl text-white">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
