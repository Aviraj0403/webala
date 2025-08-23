import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import webDevAnimation from "../../assets/WebDev.json";

const prompts = [
  "We are Webla",
  "We are a tech family",
  "We build brands",
  "We craft digital dreams",
  "We design. We develop. We deliver",
];

const Herosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-indigo-100 overflow-hidden px-6 pt-24 md:pt-0">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Left Section - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-playfair">
            <AnimatePresence mode="wait">
              <motion.span
                key={prompts[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="block bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent animate-pulse"
              >
                {prompts[index]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <motion.p
            className="text-lg text-gray-700 max-w-xl leading-relaxed font-playfair"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We turn ideas into digital experiences — custom-built websites,
            powerful mobile apps, and brand identities that leave an impression.
            No shortcuts. No templates. Just powerful execution.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white rounded-full font-medium flex items-center gap-2 shadow-lg hover:scale-[1.05] hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-700 rounded-full font-medium hover:bg-indigo-50 shadow-sm hover:scale-[1.05] transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section - Lottie Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Gradient Glow Background */}
          <motion.div
            className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full bg-gradient-to-tr from-purple-400 via-indigo-500 to-blue-400 opacity-25 blur-[100px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glassmorphism Container with Floating Animation */}
          <motion.div
            className="z-10 w-full max-w-md p-4 backdrop-blur-md rounded-2xl border border-white/20 bg-white/10 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lottie animationData={webDevAnimation} loop={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
