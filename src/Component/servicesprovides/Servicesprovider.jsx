import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaSearch,
  FaPaintBrush,
  FaVideo,
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaNetworkWired,
  FaCubes,
  FaRobot,
  FaGamepad,
  FaKeyboard,
  FaCog,
} from "react-icons/fa";

// SERVICES ARRAY (unchanged, keep your original here)
const services = [
  {
    icon: <FaCode size={50} className="text-indigo-600 group-hover:animate-bounce" />,
    title: "Website Development",
    description: "Custom-designed websites that are fast, mobile-friendly, and SEO-optimized.",
    prompt: "Start your website →",
    shadowColor: "rgba(99, 102, 241, 0.4)",
  },
  {
    icon: <FaCog size={50} className="text-gray-600 group-hover:animate-bounce" />,
    title: "App Development",
    description: "Cross-platform mobile and web apps tailored to streamline your business.",
    prompt: "Automate tasks →",
    shadowColor: "rgba(75, 85, 99, 0.4)",
  },
  {
    icon: <FaSearch size={50} className="text-green-500 group-hover:animate-bounce" />,
    title: "SEO & Content Marketing",
    description: "Improve search rankings and drive traffic with strategic content and SEO tactics.",
    prompt: "Boost your SEO →",
    shadowColor: "rgba(34, 197, 94, 0.4)",
  },
  {
    icon: <FaPaintBrush size={50} className="text-pink-500 group-hover:animate-bounce" />,
    title: "Graphic Design",
    description: "Captivating graphics, brand kits, and social media creatives tailored for you.",
    prompt: "Design now →",
    shadowColor: "rgba(244, 114, 182, 0.4)",
  },
  {
    icon: <FaVideo size={50} className="text-red-500 group-hover:animate-bounce" />,
    title: "Video Editing",
    description: "High-quality edits for reels, ads, tutorials, and storytelling videos.",
    prompt: "Edit your video →",
    shadowColor: "rgba(239, 68, 68, 0.4)",
  },
  {
    icon: <FaCloud size={50} className="text-blue-500 group-hover:animate-bounce" />,
    title: "Cloud & Server Management",
    description: "Reliable cloud setup, backups, and server security for businesses of all sizes.",
    prompt: "Manage servers →",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: <FaShieldAlt size={50} className="text-purple-500 group-hover:animate-bounce" />,
    title: "Cybersecurity",
    description: "Protect digital assets with end-to-end encryption and 24/7 monitoring.",
    prompt: "Secure your business →",
    shadowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: <FaChartBar size={50} className="text-rose-500 group-hover:animate-bounce" />,
    title: "Research & Reports",
    description: "In-depth market research and analytics tailored for smart decision-making.",
    prompt: "View our research →",
    shadowColor: "rgba(236, 72, 153, 0.4)",
  },
  {
    icon: <FaNetworkWired size={50} className="text-teal-500 group-hover:animate-bounce" />,
    title: "CRM & ERP Setup",
    description: "Boost productivity with fully customized CRM and ERP solutions.",
    prompt: "Setup system →",
    shadowColor: "rgba(20, 184, 166, 0.4)",
  },
  {
    icon: <FaCubes size={50} className="text-yellow-500 group-hover:animate-bounce" />,
    title: "Animation & 3D",
    description: "Immersive 3D models and animations for products, ads, and storytelling.",
    prompt: "Animate your brand →",
    shadowColor: "rgba(253, 224, 71, 0.4)",
  },
  {
    icon: <FaRobot size={50} className="text-indigo-500 group-hover:animate-bounce" />,
    title: "AI Solutions",
    description: "Implement AI to automate customer service, workflows, and data analysis.",
    prompt: "Apply AI now →",
    shadowColor: "rgba(129, 140, 248, 0.4)",
  },
  {
    icon: <FaGamepad size={50} className="text-pink-600 group-hover:animate-bounce" />,
    title: "Game Development",
    description: "Design, build, and launch custom games for Android, iOS, or desktop.",
    prompt: "Build your game →",
    shadowColor: "rgba(219, 39, 119, 0.4)",
  },
  {
    icon: <FaKeyboard size={50} className="text-green-600 group-hover:animate-bounce" />,
    title: "Data Entry & Virtual Assistance",
    description: "Accurate data entry and virtual assistant services to support your operations.",
    prompt: "Outsource now →",
    shadowColor: "rgba(34, 197, 94, 0.4)",
  },
  {
    icon: <FaCog size={50} className="text-gray-600 group-hover:animate-bounce" />,
    title: "Automation & IoT",
    description: "Smart automation and Internet of Things (IoT) integration for real-time control.",
    prompt: "Automate tasks →",
    shadowColor: "rgba(75, 85, 99, 0.4)",
  },
];

const Servicesprovider = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="pt-20 pb-14 bg-gradient-to-br from-white to-slate-100 font-playfair" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="font-playfair text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-indigo-600">Services</span>
        </motion.h2>

        <motion.p
          className="font-playfair text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We offer a full suite of technical and creative services to help businesses grow digitally and operationally.
          Explore how we can collaborate and elevate your vision.
        </motion.p>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl p-6 bg-white text-left shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                boxShadow: `0 10px 25px ${service.shadowColor}`,
              }}
            >
              <div className="mb-5 flex justify-center">{service.icon}</div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base text-center">
                {service.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="block mx-auto text-white bg-gradient-to-tr from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-xl"
              >
                {service.prompt}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 text-indigo-700 font-semibold hover:underline text-base sm:text-lg"
          whileTap={{ scale: 0.97 }}
        >
          {showAll ? "See Less" : "See More"}
        </motion.button>
      </div>
    </section>
  );
};

export default Servicesprovider;
