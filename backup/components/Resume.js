import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto"></div>
        </motion.div>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full flex flex-col items-center border border-gray-200 border-opacity-10 shadow-lg">
            <p className="text-gray-700 mb-8 text-center text-base md:text-lg">
              Click the button below to download my resume and know more about my academic and technical background.
            </p>
            <a
              href={process.env.PUBLIC_URL + "/NG_Resume (2).pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download="NG_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg w-full max-w-xs"
            >
              <span role="img" aria-label="resume">📄</span> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
