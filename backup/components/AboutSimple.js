import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            I'm a passionate Computer Engineering student with a keen interest in web development and technology.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div 
            className="max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              I'm currently pursuing my degree in Computer Engineering and exploring the world of web development.
              My goal is to build meaningful and efficient digital solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or working on personal projects to enhance my skills.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
