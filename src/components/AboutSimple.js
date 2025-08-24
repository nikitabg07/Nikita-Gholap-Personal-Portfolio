import React from 'react';
import { motion } from 'framer-motion';
import { FaCode,  FaLaptopCode, FaServer,  FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Frontend', icon: <FaCode className="w-6 h-6" />, items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
  { name: 'Backend', icon: <FaServer className="w-6 h-6" />, items: ['Node.js', 'Express', 'Python', 'Java'] },
  { name: 'Database', icon: <FaDatabase className="w-6 h-6" />, items: ['MongoDB', 'MySQL', 'Firebase'] },
  { name: 'Others', icon: <FaLaptopCode className="w-6 h-6" />, items: ['Git', 'GitHub', 'REST APIs', 'Responsive Design'] },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider mb-3 inline-block uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get to Know Me <span className="text-blue-600 dark:text-blue-400">Better</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-12"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full lg:w-auto mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                <div className="relative bg-white dark:bg-gray-900 p-1.5 rounded-xl">
                  <img 
                    src="/images/profile.jpg"
                    alt="Nikita Gholap"
                    className="rounded-lg w-full h-auto max-w-xs mx-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </div>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Nikita Gholap</h4>
                <p className="text-blue-600 dark:text-blue-400">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">Nikita Gholap</span>
            </h3>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                A passionate <span className="font-medium text-blue-600 dark:text-blue-400">Computer Engineering</span> student with a strong foundation in web development and a keen interest in creating impactful digital experiences. I specialize in building responsive, user-friendly applications using modern technologies.
              </p>
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-200 italic">
                  "Turning ideas into reality through clean code and innovative solutions."
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my degree at <span className="font-medium">[Your University]</span> while working on personal projects to expand my skills and contribute to meaningful solutions in the tech industry.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900/50"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 dark:text-blue-400 mr-3">{skill.icon}</span>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item}
                        className="inline-block bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3.5 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
