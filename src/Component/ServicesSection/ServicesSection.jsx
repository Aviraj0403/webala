import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaMobileAlt,
  FaHeartbeat,
  FaShoppingCart,
  FaTruck,
  FaUtensils,
  FaPencilRuler,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt size={34} className="text-sky-500" />,
    title: "Mobile App Development",
    description:
      "Engaging mobile apps tailored to your brand, ensuring performance and long-term success.",
    prompt: "See more information",
  },
  {
    icon: <FaBrain size={34} className="text-purple-600" />,
    title: "Website Development",
    description:
      "Responsive, fast, and secure websites that help you stand out and grow online.",
    prompt: "Launch your website",
  },
  {
    icon: <FaHeartbeat size={34} className="text-red-500" />,
    title: "Healthcare Website Development",
    description:
      "HIPAA-compliant websites to boost patient engagement and streamline healthcare services.",
    prompt: "Healthcare solutions",
  },
  {
    icon: <FaShoppingCart size={34} className="text-yellow-600" />,
    title: "Retail & E-commerce",
    description:
      "Scalable and user-friendly e-commerce platforms designed to maximize your sales.",
    prompt: "Boost your store",
  },
  {
    icon: <FaTruck size={34} className="text-blue-700" />,
    title: "Transport & Logistics",
    description:
      "Custom logistics solutions for efficient fleet and inventory management.",
    prompt: "Optimize logistics",
  },
  {
    icon: <FaUtensils size={34} className="text-orange-500" />,
    title: "Restaurant Websites",
    description:
      "Showcase your menu, take online orders, and manage reservations with ease.",
    prompt: "Serve better",
  },
  {
    icon: <FaPencilRuler size={34} className="text-pink-600" />,
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful, and user-friendly designs that delight customers.",
    prompt: "Enhance UX",
  },
  {
    icon: <FaBullhorn size={34} className="text-purple-700" />,
    title: "Digital Marketing",
    description:
      "SEO, social media, and content strategies to grow your digital presence.",
    prompt: "Grow online",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-gray-800 font-playfair">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
          From Idea to Launch 🚀
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We handle{" "}
          <span className="font-semibold text-blue-700">
            design, development, testing, and marketing
          </span>{" "}
          — all in one place. Simplifying your digital journey.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 360, }}
          >
            <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 shadow-inner transition-transform duration-500 animate-pulse">
              {service.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            <a
              href="#"
              className="inline-block text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
            >
              {service.prompt} →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
