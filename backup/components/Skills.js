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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Technologies I've been working with recently
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-100/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white hover:bg-gradient-to-r from-blue-50 to-white transition-all duration-300 border border-gray-200 group-hover:border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200"
                  >
                    <div className="flex-shrink-0">
                      {tech.icon}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                      <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 mt-1"></span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
