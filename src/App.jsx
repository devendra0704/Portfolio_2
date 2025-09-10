import React from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Project";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Skills from "./component/Skills";
import ParticlesCom from "./component/ParticlesCom";

const App = () => {
  return (
    <div className="flex items-center justify-center bg-[#121212] text-[#E5E7EB]" >
      <Navbar />
      <main className="pt-20">
        <div className="relative z-40">
          <ParticlesCom />
          <div className="absolute flex justify-center top-0  min-h-screen w-full bg-transparent" id="about">
            <Home />
          </div>
        </div>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
