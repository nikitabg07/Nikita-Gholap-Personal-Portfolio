import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6">
                Hello! I'm Nikita Gholap
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  I am a Computer Engineering student and passionate Software Developer with hands-on experience in both frontend and backend development. I have also worked on projects in Machine Learning and Data Science.
                </p>
                
                <p>
                  I enjoy building practical, user-friendly solutions. I believe in continuous learning and always look for ways to improve my work.
                </p>
                
                <p>
                  My goal is to apply my knowledge to real-world projects, contribute meaningfully to the IT industry, and grow as a professional by taking on new challenges and learning from experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
