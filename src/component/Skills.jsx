import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss,SiBootstrap, SiRedux, SiPython, SiCplusplus,SiSocketdotio} from "react-icons/si";
const skills = [
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },  
    { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#121212] text-white py-16 px-6 md:px-16">
      <h2 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 mb-12">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center  p-3 rounded-lg transition-transform duration-300 transform hover:scale-140">
            <span className="text-7xl cursor-pointer ">{skill.icon}</span>
            <span className="text-gray-300 font-medium mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
