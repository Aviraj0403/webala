import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaRocket, FaUsers } from "react-icons/fa";

const OurMoto = ({
  title = "Our Moto",
  message = "We believe in empowering every individual in Bihar to become a part of the digital revolution. From education to entrepreneurship, we aim to build a connected, aware, and self-sufficient society through technology.",
}) => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-white py-20 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-transparent bg-clip-text mb-6 font-playfair"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 font-playfair"
        >
          {message}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl p-6 rounded-2xl border border-purple-100 hover:shadow-purple-300 transition"
          >
            <FaGlobeAsia className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2 font-playfair">
              Digital Access
            </h4>
            <p className="text-sm font-playfair">
              Making digital tools accessible to every corner of Bihar.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl p-6 rounded-2xl border border-pink-100 hover:shadow-pink-300 transition"
          >
            <FaUsers className="text-4xl text-pink-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2 font-playfair">
              Community Empowerment
            </h4>
            <p className="text-sm font-playfair">
              Empowering students, creators, and entrepreneurs with training and exposure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl p-6 rounded-2xl border border-red-100 hover:shadow-red-300 transition"
          >
            <FaRocket className="text-4xl text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2 font-playfair">
              Innovation Growth
            </h4>
            <p className="text-sm font-playfair">
              Promoting new ideas and startups through digital initiatives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMoto;
