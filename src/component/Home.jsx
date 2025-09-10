import React from "react";
import image from "/images/image.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-5 md:px-4  text-white">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: "-10vw" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center md:text-left md:w-1/2 space-y-4 ">
        <h2 className="text-2xl font-bold font-mono md:text-4xl ">
          Hi{""}
          <motion.span
            animate={{ rotate: [0, 20, 0, -20, 0] }} // Waving effect
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="inline-block"
          >
            ✋
          </motion.span>
          , it's me
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold text-[#FF6B6B]">Devendra Saini</h1>
        <h2 className="text-2xl font-extrabold font-mono md:text-3xl text-gray-300 ">
          I am{" "}
          <span className="block md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            <Typewriter
              words={["Full Stack Developer", "MERN Stack Developer"]}
              whileInView
              loop={0}
              typeSpeed={60}
              deleteSpeed={100}
              delaySpeed={1000}
              cursor
              cursorStyle="|"
            />
          </span>
        </h2>

        <p className="max-w-xl text-md md:text-sm text-gray-300 leading-relaxed">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
            Turning ideas into reality{" "}
          </span>
          through code. I love building
          <span className="text-orange-400 font-semibold"> scalable, user-friendly applications </span>
          that make an impact. 🚀
          <br /><br />
          Passionate about
          <span className="text-purple-400 font-medium"> seamless digital experiences</span>,
          optimizing performance, and tackling real-world challenges with technology.
          <br /><br />
          <span className="italic text-gray-400"> Always learning, always evolving</span>—because innovation never stops! ✨
          <br /><br />


          <motion.span
            initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[#00FFFF] font-extrabold text-xl"
          >
            Let's build the future together and create something amazing! 🌟
          </motion.span>

        </p>



        {/* Social Icons */}
        <div className="flex justify-center md:justify-normal space-x-6 text-3xl mt-4">
          <a href="https://www.linkedin.com/in/devendra-saini-49z/" className="text-blue-500 hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/devendra0704" className="text-white hover:text-gray-400"><FaGithub /></a>
          <a href="https://leetcode.com/u/dev1506/" className="text-yellow-500 hover:text-yellow-200"><SiLeetcode /></a>
        </div>

        {/* Button */}
        <a href="#about" className="inline-block mt-6 bg-[#00FFFF] text-[#1C093C] font-bold py-2 px-6 rounded-lg hover:bg-[#00ffffbf] transition">
          More about me
        </a>
      </motion.div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 mb-20 md:mt-0">
        <img src={image} alt="Devendra Saini" className="w-72 md:w-96 rounded-lg " style={{ filter: "drop-shadow(5px 5px 40px #27f7f4)" }} />
      </div>

    </section>
  );
};

export default Home;

