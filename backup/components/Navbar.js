import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    { text: 'Home', link: '#hero', icon: <FaHome className="w-5 h-5" /> },
    { text: 'About', link: '#about', icon: <FaUser className="w-5 h-5" /> },
    { text: 'Skills', link: '#skills', icon: <FaTools className="w-5 h-5" /> },
    { text: 'Projects', link: '#projects', icon: <FaProjectDiagram className="w-5 h-5" /> },
    { text: 'Contact', link: '#contact', icon: <FaEnvelope className="w-5 h-5" /> },
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="#" className="flex items-center space-x-2">
            <FaCode className="text-2xl text-white" />
            <span className="text-white font-bold">Portfolio</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.link}
                className={`nav-link flex items-center space-x-2 ${
                  activeSection === item.link.replace('#', '') ? 'active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetSection = document.getElementById(item.link.replace('#', ''));
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                <span className="text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.text}
                  href={item.link}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white flex items-center space-x-2 ${
                    activeSection === item.link.replace('/#', '') ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetSection = document.getElementById(item.link.replace('/', ''));
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
