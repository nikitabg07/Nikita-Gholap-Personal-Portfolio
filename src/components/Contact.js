import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaCheckCircle, FaExclamationCircle, FaEnvelope } from 'react-icons/fa';
import { emailRegex } from '../config/email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setStatus('');

    // Validate form
    if (!formData.name.trim()) {
      setMessage('Please enter your name');
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setMessage('Please enter your message');
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the email using an API or email service
      // For now, we'll just show a success message
      setMessage('Thank you for your message! I will get back to you soon.');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMessage('Sorry, there was an error sending your message. Please try again.');
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="space-y-1">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
                        Name
                        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 mt-1"
                        required
                        aria-required="true"
                        aria-describedby="name-hint"
                        autoComplete="name"
                      />
                      <p id="name-hint" className="text-xs text-gray-500 mt-1">Please enter your full name</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
                        Email
                        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 mt-1"
                        required
                        aria-required="true"
                        aria-describedby="email-hint"
                        autoComplete="email"
                        inputMode="email"
                      />
                      <p id="email-hint" className="text-xs text-gray-500 mt-1">Please enter a valid email address</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="space-y-1">
                      <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">
                        Message
                        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 mt-1"
                        required
                        aria-required="true"
                        aria-describedby="message-hint"
                      ></textarea>
                      <p id="message-hint" className="text-xs text-gray-500 mt-1">Please enter your message (minimum 10 characters)</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-busy={isSubmitting}
                      aria-live="polite"
                      aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                    >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                    </button>
                  </div>
                </form>

                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                      status === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status === 'success' ? (
                      <FaCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <FaExclamationCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{message}</span>
                  </motion.div>
                )}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-white/10 rounded-lg">
                      <FaEnvelope className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a 
                        href="mailto:nikitagholap8706@gmail.com" 
                        className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        nikitagholap8706@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/nikitabg07" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-white hover:text-gray-200"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/nikita-gholap-a45438280" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 text-white"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://www.instagram.com/nikita_gholap_7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-pink-600 rounded-full transition-all duration-300 text-white"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="w-5 h-5" />
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
