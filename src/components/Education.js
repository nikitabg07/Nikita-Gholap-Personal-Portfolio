import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institute: "K.K. Wagh Institute of Engineering Education and Research, Nashik",
      period: "2023 – 2026 • Currently Pursuing (CGPA 8.48/10)",
      highlight: "CGPA 8.48/10"
    },
    {
      degree: "Diploma in Computer Technology",
      institute: "Government Polytechnic Nashik",
      period: "2021 – 2023 • 87.06%",
      highlight: "87.06%"
    },
    {
      degree: "Secondary Education (10th)",
      institute: "Swami Vivekanand Vidyalaya Dighwad, Chandwad",
      period: "2019 – 2020 • 89.40%",
      highlight: "89.40%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          <h2 className="inline-block">Education Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-purple-50/70 transform hover:-translate-y-1.5 hover:shadow-lg hover:ring-2 hover:ring-blue-100/50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {index !== 2 && (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                      <span className="text-white font-medium group-hover:scale-110 transition-transform duration-300">
                        {index === 0 ? <FaGraduationCap className="w-5 h-5" /> : <FaSchool className="w-5 h-5" />}
                      </span>
                    </div>
                  )}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {edu.institute}
                    </p>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-150"></div>
                    <p className="text-gray-600">{edu.period}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start relative z-10">
                    {index !== 2 && (
                      <div className="flex-shrink-0 mr-4 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-100/80 transition-colors duration-300">
                        {index === 0 ? (
                          <FaGraduationCap className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <FaSchool className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-gray-600 text-sm">
                        {edu.period.split(edu.highlight)[0]}
                        <span className="text-blue-600 font-semibold">{edu.highlight}</span>
                        {edu.period.split(edu.highlight)[1] || ''}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: `${edu.highlight.includes('%') ? edu.highlight : '100%'}` }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${edu.highlight.includes('%') ? edu.highlight : '100%'}` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
