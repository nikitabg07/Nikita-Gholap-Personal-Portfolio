import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCertificate } from 'react-icons/fa';

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Academic achievements and milestones</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-gray-700 mb-2">{edu.institute}</p>
                    <p className="text-gray-600">{edu.period}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      {index === 0 ? <FaGraduationCap className="text-blue-600" /> : index === 1 ? <FaSchool className="text-blue-600" /> : <FaCertificate className="text-blue-600" />}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-600 text-sm">
                        {edu.period.split(edu.highlight)[0]}
                        <span className="text-blue-600 font-semibold">{edu.highlight}</span>
                        {edu.period.split(edu.highlight)[1] || ''}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: `${edu.highlight.includes('%') ? edu.highlight : '100'}` }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${edu.highlight.includes('%') ? edu.highlight : '100'}` }}
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
