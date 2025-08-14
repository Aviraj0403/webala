import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Services Prompt & Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Webla</h2>
          <p className="text-sm text-gray-300 mb-4">
            We specialize in dynamic & static website development, mobile app development
            (Android/iOS), and seamless WhatsApp authentication setup — all
            customized to meet your business goals.
          </p>

          <div className="text-sm text-gray-400 space-y-1">
            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps/place/Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                patna, Bihar, India
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:tiwarisunny7352@gmail.com"
                className="hover:text-purple-400"
              >
                tiwarisunny7352@gmail.in
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Newsletter / Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Webla. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
