import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaMobileAlt,
  FaCodeBranch,
  FaHeartbeat,
  FaShoppingCart,
  FaTruck,
  FaUtensils,
  FaPencilRuler,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt size={30} className="text-sky-500" />,
    title: "Mobile App Development",
    description:
      "Create a lasting impact on your audience with a mobile app that fits your brand and makes it successful tomorrow.",
    prompt: "See more Informations →",
  },
  {
    icon: <FaBrain size={30} className="text-purple-600" />,
    title: "Website Development",
    description:
      "From beautiful UI to secure backend, we create responsive websites that grow your business online.",
    prompt: "Launch your website today →",
  },
  {
    icon: <FaHeartbeat size={30} className="text-red-500" />,
    title: "Healthcare Website Development",
    description:
      "Developing secure, HIPAA-compliant healthcare websites to improve patient engagement and streamline services.",
    prompt: "Discover healthcare solutions →",
  },
  {
    icon: <FaShoppingCart size={30} className="text-yellow-600" />,
    title: "Retail & E-commerce Solutions",
    description:
      "Build scalable and user-friendly e-commerce platforms that drive sales and enhance customer experience.",
    prompt: "Boost your online store →",
  },
  {
    icon: <FaTruck size={30} className="text-blue-700" />,
    title: "Transport & Logistics Development",
    description:
      "Optimizing transport and logistics with custom software solutions for efficient fleet and inventory management.",
    prompt: "Streamline your logistics →",
  },
  {
    icon: <FaUtensils size={30} className="text-orange-500" />,
    title: "Restaurant Website Development",
    description:
      "Design engaging restaurant websites with online ordering, reservation systems, and menu showcases.",
    prompt: "Serve your customers better →",
  },
  {
    icon: <FaPencilRuler size={30} className="text-pink-600" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually appealing designs to enhance user satisfaction and product usability.",
    prompt: "Elevate your user experience →",
  },
  {
    icon: <FaBullhorn size={30} className="text-purple-700" />,
    title: "Digital Marketing",
    description:
      "Driving growth through targeted digital marketing strategies including SEO, social media, and content marketing.",
    prompt: "Grow your brand online →",
  },
];

const ServicesSection = () => {
  const shadowColors = [
    "rgba(14, 165, 233, 0.4)",   // sky-500
    "rgba(147, 51, 234, 0.4)",   // purple-600
    "rgba(239, 68, 68, 0.4)",    // red-500
    "rgba(202, 138, 4, 0.4)",    // yellow-600
    "rgba(30, 64, 175, 0.4)",    // blue-700
    "rgba(249, 115, 22, 0.4)",   // orange-500
    "rgba(219, 39, 119, 0.4)",   // pink-600
    "rgba(109, 40, 217, 0.4)",   // purple-700
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-snug text-gray-900 mb-4 font-['Playfair_Display']">
          <strong className="text-blue-700">Idea, Design, Development,</strong> Quality Assurance, <br className="hidden sm:block" />
          Launching, Marketing...
        </h2>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#0b3c4c] font-['Playfair_Display']">
          All At One Place
        </h3>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 p-6 rounded-lg transition duration-300 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${shadowColors[index % shadowColors.length]}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
            }}
          >
            <div className="mb-4 inline-block transition-transform duration-500 ease-in-out hover:rotate-180">
              {service.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
            <a
              href="#"
              className="text-sm font-medium text-sky-700 hover:underline flex items-center gap-1"
            >
              {service.prompt}
              <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
