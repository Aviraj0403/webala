import React from "react";
import { PhoneCall, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 md:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 font-[Playfair]"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 text-lg mb-14 font-[Playfair]"
        >
          Reach out to our team for any questions or to schedule a counseling session.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Call Us */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <PhoneCall className="text-blue-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Playfair]">Call Us</h3>
            <p className="text-gray-600 mb-4 font-[Playfair]">
              Our team is here to help you with your queries.
            </p>
            <div className="text-gray-800 font-medium text-sm font-[Playfair]">
              <p>Sudhanshu Kumar</p>
              <a href="tel:+917352205506" className="text-blue-600 block mb-2">
                +91 7352205506
              </a>
              <p>Avi Raj</p>
              <a href="tel:+916200594193" className="text-blue-600 block">
                +91 6200594193
              </a>
            </div>
          </motion.div>

          {/* Email Us */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Playfair]">Email Us</h3>
            <p className="text-gray-600 mb-4 font-[Playfair]">
              Send us an email and we'll get back to you.
            </p>
            <div className="text-gray-800 font-medium text-sm font-[Playfair]">
              <p>General Enquiries</p>
              <a
                href="mailto:tiwarisunny7352@gmail.com"
                className="text-blue-600 block mb-2"
              >
                tiwarisunny7352@gmail.com
              </a>
              <p>Project Discussion</p>
              <a
                href="mailto:tiwarisunny7352@gmail.com"
                className="text-blue-600 block"
              >
               aviraj0403@gmail.com & tiwarisunny7352@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Playfair]">Response Hours</h3>
            <p className="text-gray-600 mb-4 font-[Playfair]">
              We are available during the following hours:
            </p>
            <div className="text-gray-800 font-medium text-sm font-[Playfair]">
              <p>Monday - Friday</p>
              <p className="text-blue-600">10:00 AM - 6:00 PM</p>
              <p className="mt-2">Saturday</p>
              <p className="text-blue-600">10:00 AM - 2:00 PM</p>
              <p className="mt-2 text-gray-500">Closed on Sunday</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
