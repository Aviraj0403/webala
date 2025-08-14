import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaFigma,
  FaGithub,
  FaNpm,
  FaGitAlt,
  FaPython,
  FaPhp,
  FaDatabase,
  FaTools,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from "react-icons/si";

// Categorized technologies
const categorizedTechnologies = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "TypeScript", icon: <FaJsSquare className="text-blue-500" /> },
    { name: "Next.js", icon: <SiVite className="text-black" /> },
    { name: "Redux", icon: <FaReact className="text-purple-600" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-indigo-800" /> },
    { name: "Firebase", icon: <SiVite className="text-orange-400" /> },
  ],
  Tools: [
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "NPM", icon: <FaNpm className="text-red-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Webpack", icon: <SiVite className="text-yellow-600" /> },
    { name: "VS Code", icon: <FaReact className="text-blue-400" /> },
    { name: "Postman", icon: <FaReact className="text-orange-400" /> },
  ],
};

const categoryIcons = {
  Frontend: <FaCode />,
  Backend: <FaServer />,
  Tools: <FaTools />,
};

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section className="bg-gradient-to-tr from-indigo-50 to-purple-100 py-16 px-4 font-playfair">
      <div className="max-w-7xl mx-auto">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 font-playfair">
  <span className="text-purple-600">Technologies</span> We <span className="text-indigo-600">Use</span>
</h2>

<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 font-playfair">
  These are the latest tools and technologies we use to build
  high-performance, scalable, and beautiful digital experiences.
</p>


        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categorizedTechnologies).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-100"
              }`}
            >
              {categoryIcons[category]} {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categorizedTechnologies[activeCategory].map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group bg-white border border-transparent hover:border-purple-400 hover:shadow-2xl transition-all rounded-xl p-6 text-center"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-purple-300 to-indigo-400 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm rounded-xl z-0"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-3 flex justify-center transition-all duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-700">
                  {tech.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
