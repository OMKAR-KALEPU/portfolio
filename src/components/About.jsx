import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { myPhoto } from "../assets";
import { services } from "../constants";
import { slideIn, fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-wrap w-70 m-auto mb-10 justify-center items-center">
        <Tilt className="xs:w-[250px]">
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            className="flex flex-row w-full"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="rounded-[20px] my-16 "
            >
              <img
                src={myPhoto}
                alt="title"
                style={{ borderRadius: "100%" }}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </Tilt>

        <div className="sm:ml-12 flex flex-col justify-center items-center sm:items-start">
          <div className="flex">
            <motion.p
              className="text-secondary text-justify text-[17px] max-w-2xl leading-[28px]"
              variants={fadeIn("up", "spring", 0.5, 0.75)}
            >
              As an undergraduate engineering student with a deep passion for
              web development, I focus on building innovative and interactive
              web applications that engage users. JavaScript is my superpower,
              and I thrive in leveraging its potential, especially in
              combination with popular frameworks like React. My dedication to
              mastering the MERN stack allows me to create seamless and
              efficient digital experiences that leave a lasting impression.
              Let's collaborate and create web magic with the power of the MERN
              stack and JavaScript!
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Roles & Responsibilities.</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
