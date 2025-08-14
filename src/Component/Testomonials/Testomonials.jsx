import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import image1 from "../../assets/shanu.png"
import image2 from "../../assets/sahil.png"
const testimonials = [
  {
    name: "Shanu Gupta",
    company: "Shanu-Mart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GoodFirms_logo.png/320px-GoodFirms_logo.png",
    photo: image1,
    feedback:
      "I have worked with Webla for months—they’re consistent and professional. Having someone reliable to work with is a blessing while scaling.",
  },
  {
    name: "Sahil Kehra",
    company: "Cihs",
    logo: "https://1000logos.net/wp-content/uploads/2021/09/Clutch-Logo-768x432.png",
    photo: image2,
    feedback:
      "The team at Webla is reliable, fast, and top-notch. They helped us scale quickly without compromising quality or communication.",
  },
  {
    name: "Sophia Lee",
    company: "Upwork",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Upwork-logo.svg",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "A seamless experience from beginning to end. Webla understands how to deliver exactly what clients need. Amazing team!",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative py-20 bg-gradient-to-br from-sky-100 via-white to-blue-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Left Panel */}
        <div className="md:w-1/3 space-y-5 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-sky-900 leading-snug font-playfair">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 text-lg">
            Feedback from our happy clients who trust our design and development
            process.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={prev}
              className="p-3 bg-sky-900 text-white rounded-full shadow-xl hover:scale-110 transition transform"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="p-3 bg-sky-900 text-white rounded-full shadow-xl hover:scale-110 transition transform"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Panel - Card */}
        <div className="md:w-2/3 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-white/30 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-20 h-20">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 to-purple-400 animate-pulse blur-sm opacity-60"></div>
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-lg sm:text-xl italic leading-relaxed mb-4">
                    “{testimonial.feedback}”
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </span>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="h-6 object-contain"
                    />
                    <span className="text-sm text-gray-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
