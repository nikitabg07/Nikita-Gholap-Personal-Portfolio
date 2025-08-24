import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Nikita Gholap</h3>
            <p className="text-gray-300 mb-2 text-md">
              Full Stack Developer
            </p>
            <p className="text-gray-500 text-xs">
              Turning ideas into reality through code
            </p>
            
            <div className="mt-4 flex space-x-3 justify-center md:justify-start">
              <a 
                href="https://github.com/nikitabg07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nikita-gholap-a45438280" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nikita_gholap_7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:nikitagholap8706@gmail.com" 
                className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center justify-center md:justify-start group"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-pink-400 transition-colors flex items-center justify-center md:justify-start group"
                >
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center justify-center md:justify-start group"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-center md:items-end">
                <span className="text-sm text-gray-400">Email</span>
                <a 
                  href="mailto:nikitagholap8706@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-base"
                >
                  nikitagholap8706@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <span className="text-sm text-gray-400">Availability</span>
                <span className="text-green-400">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-6 pt-4"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-400">
                {currentYear} Nikita Gholap. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                Built with using <span className="text-blue-400">React.js</span>, <span className="text-cyan-400">Tailwind CSS</span>, and <span className="text-purple-400">Framer Motion</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
