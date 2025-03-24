import React from "react";
import { motion } from "framer-motion";

const Education = () => {


  const educationData = [
    {
      year: "2021 - 2025",
      degree: "B.Tech in Mechanical Engineering",
      institution: "MNNIT Allahabad",
      details: "Gaining expertise in core mechanical engineering concepts while actively working on software development projects.",
    },
    {
      year: "2018 - 2019",
      degree: "Higher Secondary Education",
      institution: "Subodh Public School",
      details: "Studied Physics, Chemistry, and Mathematics with a focus on problem-solving and logical reasoning.",
    },
    {
      year: "2016 - 2017",
      degree: "Secondary Education",
      institution: "Chandramani Senior Secondary School",
      details: "Built a strong foundation in Science and Mathematics, improving logical reasoning and critical thinking skills.",
    },
  ];

  return (
    <section id="education" className=" min-h-screen bg-[#121212] text-white py-20 px-4 sm:px-8 md:px-16">
      {/* Section Title */}
      <h2 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 mb-16 ">Education</h2>
      {/* <p className="text-gray-500 mb-8">My Projects</p> */}

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto relative before:absolute before:top-0 before:left-4 sm:before:left-1/3 before:w-1 before:h-full before:bg-gray-500">
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center mb-12 relative">
            {/* Left Side: Year (For mobile, center-align it) */}
            <motion.div
              initial={{ opacity: 0, x:-30 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{ duration: 1.2,delay:0.3 }}
              // viewport={{ once: true, amount: 0.5 }}
              className="w-full sm:w-1/3 text-center sm:text-right pr-6 sm:pr-12 overflow-hidden">
              <span className="text-orange-400 font-semibold text-lg">{edu.year}</span>
            </motion.div>

            {/* Middle Dot (Shifts slightly left on small screens) */}
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-orange-400 rounded-full absolute top-2 sm:top-1/2 left-4 sm:left-1/3 transform -translate-x-1/2"></div>

            {/* Right Side: Details (Make full width for mobile) */}
            <motion.div
              initial={{ opacity: 0, x:30 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{ duration: 1.2 }}
              className="w-6/7 sm:w-2/3 bg-[#1E1E1E] p-4 sm:p-6 rounded-lg shadow-lg border border-gray-600 mt-4 sm:mt-0 overflow-hidden">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-300 italic">{edu.institution}</p>
              <p className="text-gray-400 mt-2">{edu.details}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
