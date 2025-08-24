import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Frontend Development",
    description: "Modern, fast, responsive websites using React and Tailwind CSS."
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful user experiences with Figma, HTML/CSS."
  },
  {
    title: "Project Collaboration",
    description: "Team up and contribute on live projects using GitHub & tools."
  },
  {
    title: "Portfolio Creation",
    description: "Helping others build standout personal websites like this one!"
  },
  {
    title: "Custom Software Solutions",
    description: "Building custom software solutions tailored to your needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
