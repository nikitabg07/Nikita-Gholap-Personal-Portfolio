import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiCanva } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BiLogoPython } from 'react-icons/bi';

const Skills = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-2xl text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-2xl text-cyan-500" /> }
      ]
    },
    {
      title: "Backend & Programming",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
        { name: "C", icon: <span className="text-2xl font-bold text-green-600">C</span> },
        { name: "C++", icon: <TbBrandCpp className="text-2xl text-blue-500" /> },
        { name: "Python", icon: <BiLogoPython className="text-2xl text-yellow-500" /> }
      ]
    },
    {
      title: "Tools",
      technologies: [
        { name: "Git", icon: <FaGitAlt className="text-2xl text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-2xl text-gray-800" /> },
        { name: "Figma", icon: <FaFigma className="text-2xl text-pink-500" /> },
        { name: "Canva", icon: <SiCanva className="text-2xl text-blue-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2>My Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-100/50"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -3, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-200"
                    >
                      <div className="mb-2">{tech.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
