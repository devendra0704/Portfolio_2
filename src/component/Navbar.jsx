import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [scrollPercentage, setScrollPercentage] = useState(0);

  // const updateScrollPercentage = () => {
  //   const scrollTop = window.scrollY;
  //   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   const scrollPercent = (scrollTop / scrollHeight) * 100; 
  //   setScrollPercentage(scrollPercent);
  // };


  // useEffect(() => {
  //   window.addEventListener("scroll", updateScrollPercentage);
  //   return () => window.removeEventListener("scroll", updateScrollPercentage);
  // }, []);



  return (
    <nav className="fixed top-0 left-0 w-full p-4 shadow-lg z-50 bg-[#121212]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(360deg, rgba(79,73,176,1) 9%, rgba(45,45,198,1) 22%, rgba(9,177,212,1) 35%)",
          }}>
          <a href="home">{"< Devendra Saini/>"}</a>
        </h1>

        {/* Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


        {/* Menu Links (Visible on Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {["About", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-base lg:text-lg font-popins font-medium text-white hover:text-[#00ADB5]">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-0 right-0 w-2/5 h-full bg-[#121212] shadow-lg p-8 flex flex-col space-y-6 text-white md:hidden"
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          {["About", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl hover:text-orange-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Moving Line Effect */}
      {/* <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-150" 
        style={{ width: `${scrollPercentage}%` }}>
      </div> */}

    </nav>
  );
};

export default Navbar;
