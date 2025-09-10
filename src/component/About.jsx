import React from "react";
import { motion } from "framer-motion";
import Desktop from "./Destop";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center py-96 sm:py-0  px-2 md:px-4 bg-[#121212] text-white"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: false, amount: 0.3 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center space-y-8">

      {/* Profile Image */}
      {/* <motion.img
        src={image}
        alt="Devendra Saini"
        className="rounded-full w-60 h-60 mb-8 md:w-92 md:h-92 background-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        // viewport={{ once: false, amount: 0.3 }}
      /> */}
      <div className="w-80 h-80 mb-8 md:w-110 md:h-110 background-none cursor-pointer">
      <Desktop/>
      </div>

      {/* Cool Animated Paragraph */}
      <motion.p
          className="max-w-2xl text-md px-4 sm:px-0 text-lg lg:text-xl font-popins text-gray-400 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        // viewport={{ once: false, amount: 0.3 }}
      >

          Hi, I'm Devendra Saini,
          a student at NIT Allahabad,
          with a deep passion for Web & Software Development.
          I have fully embraced Full Stack Development,
          driven by my curiosity to build scalable, user-friendly applications
          that solve real-world challenges.
          My expertise lies in building robust, real-time solutions,
          with a strong focus on performance optimization and seamless user experiences.
          <br />
          <br />  
          I love solving real-world problems through technology!

          I believe in continuous learning and innovation, always exploring new frameworks and tools to enhance my skills and create impactful solutions.

          I aspire to work in a dynamic and challenging environment
          where I can contribute both my software development expertise and problem-solving skills
          to build cutting-edge digital products.
      </motion.p>

      </div>

      {/* Resume Download Button */}
      <motion.a
        href="/Devendra.pdf"
        download="Devendra_Saini.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 mt-12 rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition duration-300 text-white shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, scale: 1 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
};

export default About;



// {      Hi, I'm Devendra Saini, a Mechanical Engineering student at MNNIT Allahabad with a deep passion for Web and Software Development.
//   Despite coming from a core engineering background, I have immersed myself in Full Stack Development, driven by a strong curiosity to build scalable, user-friendly applications that solve real-world challenges.


//   I specialize in **building robust, real-time, and scalable solutions**,
//     with a strong focus on **performance optimization and seamless user
//     experiences**.
  

//     I love solving real-world problems through technology!
    
//     I believe in continuous learning and innovation, always exploring new frameworks and tools to enhance my skills and create impactful solutions.

//     I aspire to work in a dynamic and challenging environment where I can contribute **both my software development expertise and problem-solving skills** to build **cutting-edge digital products**.  


// 🚀 **Let’s connect and build something amazing together!** }