import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Get in Touch</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 md:p-10 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Send me a message</h3>
                <p className="text-gray-600 mb-6 text-center">I'll get back to you as soon as possible</p>
                
                <a 
                  href="mailto:nikitagholap8706@gmail.com?subject=Message from Portfolio"
                  className="w-full max-w-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <FaEnvelope className="mr-2" />
                  Email Me
                </a>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-6 text-blue-100">Here's how you can reach me:</p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-100 mb-2">Email</h4>
                    <a 
                      href="mailto:nikitagholap8706@gmail.com" 
                      className="text-white hover:text-blue-100"
                    >
                      nikitagholap8706@gmail.com
                    </a>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-100 mb-2">Connect</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/nikitabg07" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/nikita-gholap-a45438280" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href="https://www.instagram.com/nikita_gholap_7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
