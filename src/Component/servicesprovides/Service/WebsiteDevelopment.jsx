import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { Canvas } from "@react-three/fiber"; // Import for 3D canvas
import { OrbitControls, Sphere } from "@react-three/drei"; // 3D elements

const WebsiteDevelopmentPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-700 font-sans text-white py-26">
      {/* Hero Section with 3D Interaction */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-semibold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web Solutions for the Digital Age
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bringing your ideas to life with custom-designed websites, powerful functionalities, and a modern approach.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-indigo-500 to-indigo-600 px-8 py-3 rounded-full text-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
        >
          Get Started
        </motion.button>
      </div>

      {/* 3D Interactive Scene */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Sphere args={[1, 100, 100]} position={[-2, 1, 0]}>
            <meshStandardMaterial color="royalblue" roughness={0.4} />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Process and Features Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Process
        </motion.h2>

        <motion.p
          className="text-center text-lg sm:text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We create websites that not only look stunning but are also highly functional and user-friendly.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Discovery</h3>
            <p className="text-gray-700">Understanding your brand, needs, and goals to design an ideal user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Design & Development</h3>
            <p className="text-gray-700">Crafting the perfect website that aligns with your business goals and vision.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Launch & Support</h3>
            <p className="text-gray-700">Deploying the website and offering ongoing support for seamless performance.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>

        <ul className="text-lg sm:text-xl text-gray-300 space-y-4">
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - Modern, Responsive Design
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - SEO Optimization
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - E-commerce Integration
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - Real-Time Analytics
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - Easy Content Management Systems (CMS)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            - Custom Web Applications
          </motion.li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-indigo-500 to-indigo-600 px-8 py-3 rounded-full text-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
        >
          Start Your Project
        </motion.button>
      </div>
    </section>
  );
};

export default WebsiteDevelopmentPage;
