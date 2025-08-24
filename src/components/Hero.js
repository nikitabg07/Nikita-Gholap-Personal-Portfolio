import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 mt-4 md:mt-8"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nikita Gholap
              </span>
            </h1>
          </motion.div>

          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-lg font-medium">
              Full Stack Developer
            </div>
          </motion.div>

          {/* Summary */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I craft seamless web experiences with modern technologies and clean code. 
            Passionate about turning ideas into reality through innovative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Let's Work Together
            </a>
            <a 
              href="#projects"
              className="inline-block border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              See My Work
            </a>
          </motion.div>
          
          {/* Scroll Down Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 md:mt-8"
          >
            <a 
              href="#about"
              className="inline-flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
