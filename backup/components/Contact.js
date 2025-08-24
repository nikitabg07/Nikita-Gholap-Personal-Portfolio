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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Have a project, collaboration, or just want to say hi? Feel free to drop a message!</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-gray-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-gray-200"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-gray-200 resize-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : (
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
              className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}
            >
              {status === 'success' ? (
                <FaCheckCircle className="w-5 h-5" />
              ) : (
                <FaExclamationCircle className="w-5 h-5" />
              )}
              {message}
            </motion.div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 text-lg font-semibold">Or connect with me on:</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/nikitabg07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nikita-gholap-a45438280" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a 
                href="https://www.instagram.com/nikita_gholap_7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a 
                href="mailto:nikitagholap8706@gmail.com" 
                className="text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
