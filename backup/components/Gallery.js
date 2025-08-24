import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    img: process.env.PUBLIC_URL + "/certificates/Mahindra_Pride.jpg",
    desc: "Mahindra Pride - Employability Skills Development Program"
  },
  {
    img: process.env.PUBLIC_URL + "/certificates/aws_certificate.jpg",
    desc: "AWS Academy Cloud Foundations - Certificate of Completion"
  },
  {
    img: process.env.PUBLIC_URL + "/certificates/infosys_react_native.jpg",
    desc: "Infosys Springboard - React Native Projects"
  },
  {
    img: process.env.PUBLIC_URL + "/certificates/zensar_employability.jpg",
    desc: "Zensar RPG Foundation - Employability Skill Development"
  },
  {
    img: process.env.PUBLIC_URL + "/certificates/google_ai_workshop.jpg",
    desc: "Google Workspace - Bring AI to Work Workshop"
  },
  {
    img: process.env.PUBLIC_URL + "/certificates/nxtwave_ai.jpg",
    desc: "NxtWave - AI for Students: Build Your Own Generative AI Model"
  }
];

const achievements = [
  {
    img: process.env.PUBLIC_URL + "/achievements/fintank_collage.jpg",
    desc: "FinTank 2024 - Team Collaboration & Participation"
  },
  {
    img: process.env.PUBLIC_URL + "/achievements/innov_era_certificate.jpg",
    desc: "INNOV-ERA National Hackathon Finalist"
  },
  {
    img: process.env.PUBLIC_URL + "/achievements/campus_ambassador_offer.jpg",
    desc: "Campus Ambassador Offer - E-Cell IIT Bombay"
  },
  {
    img: process.env.PUBLIC_URL + "/achievements/deloitte_certificate.jpg",
    desc: "Deloitte Technology Job Simulation Completion"
  },
  {
    img: process.env.PUBLIC_URL + "/achievements/gdg solution.jpg",
    desc: "GDG Solution Certificate - Google Developer Groups"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
        </motion.div>

        {/* Certificates Section */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🏅 Certificates</h3>
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-[320px]">
            {certificates.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-200 border-opacity-10 shadow-lg bg-white flex flex-col items-center justify-between">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-white p-2 rounded-lg">
                  <img
                    src={item.img}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-full object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => window.open(item.img, '_blank')}
                  />
                </div>
                <p className="text-gray-900 text-center text-xs sm:text-sm md:text-base p-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">🏆 Achievements</h3>
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-[320px]">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-200 border-opacity-10 shadow-lg bg-white flex flex-col items-center justify-between">
                <div className="w-full h-40 sm:h-48 md:h-56 bg-white p-2 rounded-lg">
                  <img
                    src={item.img}
                    alt={`Achievement ${idx + 1}`}
                    className="w-full h-full object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => window.open(item.img, '_blank')}
                  />
                </div>
                <p className="text-gray-900 text-center text-xs sm:text-sm md:text-base p-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
