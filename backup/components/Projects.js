import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "VoiceA – Inclusive Educational Platform",
    description: "A web platform to support visually impaired students with accessible learning features including quizzes, voice book readers, and dashboards.",
    tech: "React.js, Node.js, Express.js, MongoDB, TTS APIs",
    image: process.env.PUBLIC_URL + "/project/voicea.png",
    link: "#"
  },
  {
    title: "WanderLust – Full Stack Travel Booking Platform",
    description: "A comprehensive travel booking platform with hotel reservations, flight bookings, and destination guides. Features include user authentication, real-time availability, and secure payment processing.",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe API, Mapbox",
    image: process.env.PUBLIC_URL + "/project/wonderlust.png",
    link: "#"
  },
  {
    title: "Small Bizz – Local Business Management",
    description: "A platform for small businesses to manage their operations, inventory, and customer relationships. Features include order tracking, inventory management, and customer analytics.",
    tech: "React.js, Node.js, Express.js, MongoDB, Redux",
    image: process.env.PUBLIC_URL + "/project/smallbizz.png",
    link: "#"
  },
  {
    title: "Crops Classification with Recommendation System",
    description: "A machine learning-based system to classify crop types based on soil and environmental conditions, with recommendations for farmers.",
    tech: "Python, Pandas, scikit-learn, Jupyter Notebook",
    image: process.env.PUBLIC_URL + "/project/crop_detection_system.png",
    link: "#"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and achievements. Built with React and Tailwind CSS.",
    tech: "React, HTML, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-72 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 flex-1">{project.description}</p>
                <p className="text-sm text-gray-500 italic mb-4">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
