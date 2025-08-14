import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

const developers = [
  {
    name: "Avi Raj",
    role: "Frontend Developer",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    ],
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    ],
  },
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Database", icon: <FaDatabase className="text-purple-600" /> },
    ],
  },
 
];

const Developerskills = () => {
  return (
    <section className="bg-gradient-to-r from-[#f3e8ff] to-[#e0f2fe] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Developer Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {developers.map((dev, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {dev.name}
              </h3>
              <p className="text-sm text-indigo-600 font-medium mb-4">
                {dev.role}
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                {dev.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex flex-col items-center text-sm font-medium text-gray-700"
                  >
                    <div className="text-3xl mb-1">{skill.icon}</div>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developerskills;
