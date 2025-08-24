import React, { useState, useEffect } from 'react';
// Removed unused import
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.history.pushState({}, '', `#${sectionId}`);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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

    // Handle initial scroll position
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button 
            className="flex items-center space-x-2 flex-shrink-0 focus:outline-none"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState({}, '', window.location.pathname);
            }}
            aria-label="Scroll to top"
          >
            <FaCode className="text-2xl text-white" />
            <span className="text-white font-bold text-lg sm:text-xl">Portfolio</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => {
              const sectionId = item.link.replace('#', '');
              return (
                <a
                  key={item.text}
                  href={item.link}
                  className={`flex items-center px-1 pt-1 text-sm lg:text-base font-medium transition-colors duration-200 ${
                    activeSection === sectionId
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-400'
                  }`}
                  onClick={(e) => scrollToSection(e, sectionId)}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                  <span className="ml-2">{item.text}</span>
                </a>
              );
            })}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => {
                const sectionId = item.link.replace('#', '');
                return (
                  <a
                    key={item.text}
                    href={item.link}
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-md ${
                      activeSection === sectionId
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={(e) => scrollToSection(e, sectionId)}
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
