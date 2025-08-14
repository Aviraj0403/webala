// PortfolioNavbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/webalalogo2.jpeg";

// Unique nav links and colors
const navLinks = ["Aboutdeveloper", "ourproject", "Technology", "Servicesprovider", "ServicesSection", "ContactUs"];
const linkColors = ["text-purple-500"];

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Load the Google Font dynamically (only once)
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-4 group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative w-16 h-16 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg">
            <div className="absolute inset-0 z-0 animate-spin-slow bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-lg opacity-30"></div>
            <img
              src={logo}
              alt="Logo"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/20 backdrop-blur-md"
            />
          </div>
          <div className="relative">
            <h1 className="text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-pink-600 drop-shadow-lg">
              <span className="inline-block animate-glow" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Web
              </span>
              <span className="text-indigo-500 animate-glow delay-200" style={{ fontFamily: "'Great Vibes', cursive" }}>
                ala
              </span>
            </h1>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/30 opacity-0 group-hover:opacity-100 animate-shine" />
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              className={`hover:underline transition font-playfair ${linkColors[i % linkColors.length]}`}
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white px-6 pb-4 space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }} 
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className={`block transition font-playfair ${linkColors[i % linkColors.length]} hover:underline`}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
