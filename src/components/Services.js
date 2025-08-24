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
          className="section-title text-center"
        >
          <h2 className="inline-block">Services I Offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:border-transparent hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-purple-50/70 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-150"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
