import React from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/imageUtils';

const certificates = [
  {
    img: getImageUrl('certificates/Mahindra_Pride.jpg'),
    desc: "Mahindra Pride - Employability Skills Development Program"
  },
  {
    img: getImageUrl('certificates/aws_certificate.jpg'),
    desc: "AWS Academy Cloud Foundations - Certificate of Completion"
  },
  {
    img: getImageUrl('certificates/infosys_react_native.jpg'),
    desc: "Infosys Springboard - React Native Projects"
  },
  {
    img: getImageUrl('certificates/zensar_employability.jpg'),
    desc: "Zensar RPG Foundation - Employability Skill Development"
  },
  {
    img: getImageUrl('certificates/google_ai_workshop.jpg'),
    desc: "Google Workspace - Bring AI to Work Workshop"
  },
  {
    img: getImageUrl('certificates/nxtwave_ai.jpg'),
    desc: "NxtWave - AI for Students: Build Your Own Generative AI Model"
  }
];

const achievements = [
  {
    img: getImageUrl('achievements/fintank_collage.jpg'),
    desc: "FinTank 2024 - Team Collaboration & Participation"
  },
  {
    img: getImageUrl('achievements/innov_era_certificate.jpg'),
    desc: "INNOV-ERA National Hackathon Finalist"
  },
  {
    img: getImageUrl('achievements/campus_ambassador_offer.jpg'),
    desc: "Campus Ambassador Offer - E-Cell IIT Bombay"
  },
  {
    img: getImageUrl('achievements/deloitte_certificate.jpg'),
    desc: "Deloitte Technology Job Simulation Completion"
  },
  {
    img: getImageUrl('achievements/gdg solution.jpg'),
    desc: "GDG Solution Certificate - Google Developer Groups"
  }
];

const Gallery = () => {
  // Function to handle image loading errors
  const handleImageError = (e, fallbackText) => {
    console.error(`Error loading image: ${fallbackText}`, e);
    // Create a fallback div with text
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm p-2 text-center';
    fallbackDiv.textContent = `Image not available: ${fallbackText}`;
    e.target.parentNode.replaceChild(fallbackDiv, e.target);
  };
  return (
    <section id="gallery" className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title !mb-4"
        >
          <h2>My Gallery</h2>
        </motion.div>

        {/* Certificates Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="w-full text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 relative inline-block pb-2">
              Certificates
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            </h3>
          </div>
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-[320px] pb-4">
              {certificates.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-72 md:w-80 h-80 md:h-96 rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl bg-white flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-full h-56 md:h-64 bg-gray-50 p-3 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={`Certificate ${idx + 1}`}
                      className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => window.open(item.img, '_blank')}
                      onError={(e) => handleImageError(e, item.desc)}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full p-4 bg-white border-t border-gray-100">
                    <p className="text-gray-800 text-sm md:text-base font-medium text-center">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="w-full text-center mb-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 relative inline-block pb-2">
              Achievements
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            </h3>
          </div>
          <div className="overflow-x-auto pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-gray-50 p-3 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={`Achievement ${idx + 1}`}
                      className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => window.open(item.img, '_blank')}
                      onError={(e) => handleImageError(e, item.desc)}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <p className="text-gray-800 text-sm font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
