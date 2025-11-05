import React from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/imageUtils';

const projects = [
  {
    title: "VoiceA – Inclusive Educational Platform",
    description: "A web platform to support visually impaired students with accessible learning features including quizzes, voice book readers, and dashboards.",
    tech: "React.js, Node.js, Express.js, MongoDB, TTS APIs",
    image: getImageUrl('project/voicea.png'),
    style: { objectPosition: 'top', backgroundColor: '#f0f9ff' },
    link: "#"
  },
  {
    title: "WanderLust – Full Stack Travel Booking Platform",
    description: "A comprehensive travel booking platform with hotel reservations, flight bookings, and destination guides. Features include user authentication, real-time availability, and secure payment processing.",
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe API, Mapbox",
    image: getImageUrl('project/wonderlust.png'),
    style: { objectPosition: 'center', backgroundColor: '#f0fdf4' },
    link: "#"
  },
  {
    title: "Small Bizz – Local Business Management",
    description: "A platform for small businesses to manage their operations, inventory, and customer relationships. Features include order tracking, inventory management, and customer analytics.",
    tech: "HTML, CSS, JavaScript",
    image: getImageUrl('project/smallbizz.png'),
    style: { objectPosition: 'center', backgroundColor: '#f8fafc' },
    link: "#"
  },
  {
    title: "Crops Classification with Recommendation System",
    description: "A machine learning-based system to classify crop types based on soil and environmental conditions, with recommendations for farmers.",
    tech: "Python, Pandas, scikit-learn, Jupyter Notebook",
    image: getImageUrl('project/crop_detection_system.png'),
    style: { objectPosition: 'center', backgroundColor: '#f0fdfa' },
    link: "#"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and achievements. Built with React and Tailwind CSS.",
    tech: "React, HTML, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    style: { objectPosition: 'center', backgroundColor: '#f5f3ff' },
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>My Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 
              }}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden" style={{ backgroundColor: (project.style && project.style.backgroundColor) || '#f8fafc' }}>
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img 
                    src={project.image.startsWith('http') ? project.image : process.env.PUBLIC_URL + project.image} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/800x450?text=Project+Image';
                    }}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      ...project.style
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
