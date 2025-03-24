import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBookOpen, faTasks, faGamepad, faRobot, faUser, faMusic, faCloudSun, faDice, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FiX } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, SiPython, SiCplusplus, SiSocketdotio } from "react-icons/si";


const projectsList = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description: "A full-stack chat application with Socket.IO.",
    details: "Developed a real-time messaging platform supporting one-on-one and group chats with Socket.IO. Designed a responsive UI using Tailwind CSS for a seamless user experience across devices. Integrated media file sharing (images, videos, PDFs) with ImageKit.io for efficient storage and retrieval. Secured authentication using JWT-based APIs and enhanced engagement with emoji support via emoji-picker-react. Optimized MongoDB schemas for improved query performance.",
    icon: faComments,
    liveLink: "https://real-time-chat-app-v1.netlify.app/",
    githubLink: "https://github.com/devendra0704/Real-Time-Chat-App",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-300" /> },
    ],
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description: "An interactive platform for online learning.",
    details: "Engineered a scalable ed-tech platform enabling students to enroll in courses and instructors to create educational content. Implemented RESTful APIs for user authentication, course management, and payments. Integrated Razorpay for seamless transactions and Cloudinary for optimized media storage. Ensured security with JWT authentication and email verification while maintaining smooth UI/UX with React and Tailwind CSS.",
    icon: faBookOpen,
    liveLink: "#",
    githubLink: "https://github.com/devendra0704/Elearning",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app to manage daily tasks.",
    details: "Built a task management system allowing users to create, update, and track daily tasks. ensured a seamless user experience with a responsive UI built using Tailwind CSS. Implemented CRUD operations with React state management for efficient task handling. Enhanced user productivity with task categorization and priority sorting features.",
    icon: faTasks,
    liveLink: "https://task-manager-app-lac-eta.vercel.app/",
    githubLink: "https://github.com/devendra0704/Task-Manager-App",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    description: "A simple tic-tac-toe game for two players.",
    details: "Designed and developed an interactive Tic-Tac-Toe game with a responsive UI using JavaScript, HTML, and CSS. Implemented a turn-based system with real-time winner detection and game reset functionality. Optimized gameplay for smooth user experience, leading to over 500 successful gameplay sessions during user testing.",
    icon: faGamepad,
    liveLink: "https://devendra0704.github.io/tictactoe/",
    githubLink: "https://github.com/devendra0704/tictactoe",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    id: 5,
    title: "Humanoid Robot",
    description: "A bipedal robot mimicking human gait.",
    details: "Developed a humanoid robot with 10 degrees of freedom, leveraging inverse kinematics for stable and smooth locomotion on flat terrain. Designed and optimized trajectory planning for efficient movement. Programmed the robot in C++ and integrated servo motor control for precise joint actuation.",
    icon: faRobot,
    liveLink: "#",
    githubLink: "https://github.com/devendra0704/Humanoid-2022-23-Project",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
    details: "Designed and developed a fully responsive portfolio website using React and Tailwind CSS. Integrated Framer Motion for smooth animations and interactive elements. Showcases projects, skills, and a contact section with a user-friendly UI for optimal user experience.",
    icon: faUser,
    liveLink: "#",
    githubLink: "#",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    id: 7,
    title: "Spotify Clone",
    description: "A music streaming app inspired by Spotify.",
    details: "Developed a responsive Spotify clone using HTML, CSS, and JavaScript. Implemented audio playback controls, playlist functionality, and a visually appealing UI. Optimized performance for smooth user interactions and seamless music streaming experience.",
    icon: faMusic,
    liveLink: "#",
    githubLink: "https://github.com/devendra0704/Spotify_clone",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    id: 8,
    title: "Weather App",
    description: "Check real-time weather updates for any city.",
    details: "Built a weather forecasting application using React and the OpenWeather API. Implemented a user-friendly search feature for retrieving real-time weather data based on location. Designed a clean and responsive UI with Tailwind CSS for optimal usability.",
    icon: faCloudSun,
    liveLink: "#",
    githubLink: "https://github.com/devendra0704/Weather-app",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      {name:"Node.js",icon:<FaNodeJs className="text-green-500"/>},
      {name:"Express.js",icon:<SiExpress className="text-gray-300"/>},
    ],
  },
  {
    id: 9,
    title: "Dice Game",
    description: "A fun dice-rolling game.",
    details: "Created an engaging dice-rolling game with HTML, CSS, and JavaScript. Implemented random dice roll mechanics and score tracking for competitive gameplay. Designed an interactive UI with smooth animations and responsive design for all screen sizes.",
    icon: faDice,
    liveLink: "#",
    githubLink: "https://github.com/devendra0704/diece-game",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    id: 10,
    title: "Tour Plan",
    description: "An application for planning trips and itineraries.",
    details: "Developed a trip-planning application that allows users to create, manage, and customize their itineraries. Designed a user-friendly interface with React and Tailwind CSS for seamless navigation and itinerary management.",
    icon: faMapMarkedAlt,
    liveLink: "#",
    githubLink: "#",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
];




const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-[#121212]  p-16 rounded-lg shadow-black shadow-lg hover:shadow-2xl transition-shadow duration-100">
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={project.icon} className="text-3xl " />
        </div>
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-500 text-sm">{project.description}</p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 hover:text-blue-700 mt-2 cursor-pointer"
        >
          View More
        </button>


      </div>

      {showDetails &&

        (<div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50 m-2">
          <div className="bg-[#121212] p-8 rounded-lg shadow-lg max-w-lg w-full relative">

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-500 text-2xl"
            >
              <FiX />
            </button>

            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={project.icon} className="text-3xl " />
            </div>

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-500 text-sm">{project.description}</p>
            <br />
            <p className="text-gray-400 text-sm">{project.details}</p>

            <div className="flex flex-wrap justify-center mt-4">
              {project.skills.map((skill, index) => (
                <div key={index} className="flex items-center text-4xl  p-1 rounded-lg mr-2 mb-1">
                  {skill.icon}
                </div>
              ))}
            </div>

            <div className="mt-4 ">
              <a href={project.liveLink} className="text-blue-500 hover:underline mr-2">Live Demo</a> |
              <a href={project.githubLink} className="text-blue-500 hover:underline ml-2">GitHub</a>
            </div>
          </div>

        </div>)
      }
    </>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="text-center  bg-[#121212]">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 p-25">My Projects</h2>
      {/* <p className="text-gray-500 mb-8">My Projects</p> */}

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
