import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>About Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Hello! I'm Nikita Gholap
              </h3>
              
              <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  I am a passionate <span className="font-semibold text-gray-800">Computer Engineering student</span> and <span className="font-semibold text-gray-800">Software Developer</span> with hands-on experience in both frontend and backend development.
                </p>
                
                <p>
                  I thrive on building <span className="font-medium text-gray-800">practical, user-friendly solutions</span> that make a real impact. With a strong foundation in problem-solving and a keen eye for detail, I'm committed to creating clean, efficient, and maintainable code.
                </p>
                
                <p>
                  I believe in the power of <span className="font-medium text-gray-800">continuous learning</span> and am always seeking opportunities to expand my skill set and stay current with industry trends. My goal is to leverage my technical expertise to contribute to meaningful projects that solve real-world challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
