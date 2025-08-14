import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaStore, FaChartLine } from "react-icons/fa";

const ideas = [
  {
    icon: <FaStore size={28} className="text-indigo-600" />,
    title: "Online Boutique Store",
    description:
      "We help you launch a stylish eCommerce boutique with inventory, payment, and delivery management built-in.",
    prompt: "Start your fashion journey →",
    shadowColor: "hover:shadow-[0_4px_25px_rgba(99,102,241,0.4)]",
  },
  {
    icon: <FaChartLine size={28} className="text-green-600" />,
    title: "Investment Education Platform",
    description:
      "Turn your market knowledge into a business by creating a course-based platform for investors & learners.",
    prompt: "Monetize your knowledge →",
    shadowColor: "hover:shadow-[0_4px_25px_rgba(34,197,94,0.4)]",
  },
  {
    icon: <FaLightbulb size={28} className="text-yellow-500" />,
    title: "Local Services Marketplace",
    description:
      "We ideate and develop platforms to connect local service providers with nearby customers — plumbers, tutors, and more.",
    prompt: "Launch your local platform →",
    shadowColor: "hover:shadow-[0_4px_25px_rgba(234,179,8,0.4)]",
  },
];

const Projectsidea = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-snug font-playfair">
          <span className="text-blue-700">Have an Idea?</span> We Shape It Into a{" "}
          <span className="text-pink-600">Working Business Model</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto font-playfair">
          Whether you’re a startup or just have a concept, we guide you with business ideas and build web/app solutions that match your goals. From ideation to launch — we’re with you.
        </p>
      </div>

      {/* Idea Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {ideas.map((idea, index) => (
          <motion.div
            key={index}
            className={`bg-white border border-gray-200 p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:scale-105 ${idea.shadowColor}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{idea.icon}</div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 font-playfair">{idea.title}</h4>
            <p className="text-sm text-gray-600 mb-3 font-playfair">{idea.description}</p>
            <a href="#" className="text-sm font-medium text-sky-700 hover:underline font-playfair">
              {idea.prompt}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projectsidea;
