import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/viru.jpg";
import abhi from "../../assets/abhi.png";
import abhi1 from "../../assets/abhi1.png";
import sudh1 from "../../assets/sudh.jpg";
import suraj from "../../assets/deepak.jpeg";
import ritik from "../../assets/ritik.jpg";
const developers = [
  {
    name: "Sudhanshu Kumar",
    role: "Founder & Business Lead",
    image: sudh1,
    desc: "Leading Webala as Founder & Business Lead, with a focus on building strong client relationships, delivering innovative solutions, and scaling business growth.",
  },
  {
    name: "Avi Raj Singh",
    role: "Coo-Founder & Tech Lead",
    image: abhi,
    desc: "As Co-Founder & Tech Lead at Webala, he specializes in architecting modern web solutions, leading development teams, and turning ideas into powerful digital products.",
  },
  {
    name: "Deepak Kumar Singh",
    role: "CEO & Project Lead",
    image: suraj,
    desc: "Leading Webala as CEO & Project Lead, he transforms client goals into impactful digital solutions through strong leadership and efficient project management.",
  },
  {
    name: "Abhishek Pandey",
    role: "Fullstack Developer & Team Lead",
    image: abhi1,
    desc: "Delivers fast, scalable, and accessible web apps using React, mastering component-driven development and performance tuning.",
  },
  {
    name: "Virat Rana",
    role: "Influencer / Web Developer",
    image: image1,
    desc: "Combines social reach with technical expertise to promote, build, and review creative digital experiences and web tools.",
  },
  {
    name: "Hritik Thakur",
    role: "Python Developer & AI/ML Engineer",
    image: ritik,
    desc: "Designs intelligent systems and automates processes using Python, with a strong foundation in machine learning and data science.",
  },
];

const Aboutdevelopers = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-3 font-playfair">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent font-['Playfair_Display'] mb-10">
          Meet Our Webala Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-indigo-100 rounded-2xl shadow-md p-4 sm:p-6 text-center transition-all hover:bg-indigo-50 hover:shadow-lg"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-indigo-300">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-700 transition">
                {dev.name}
              </h3>
              <p className="text-xs text-indigo-600 font-medium mb-1">
                {dev.role}
              </p>
              <p className="text-xs text-gray-600">{dev.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutdevelopers;
