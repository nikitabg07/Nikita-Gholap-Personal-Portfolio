import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const socialLinks = [
  { 
    icon: <FaGithub size={24} />, 
    url: 'https://github.com/nikitabg07', 
    label: 'GitHub',
    color: 'hover:text-gray-800',
    bg: 'hover:bg-gray-100'
  },
  { 
    icon: <FaLinkedin size={24} />, 
    url: 'https://www.linkedin.com/in/nikita-gholap-a45438280', 
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
    bg: 'hover:bg-blue-50'
  },
  { 
    icon: <FaEnvelope size={24} />, 
    url: 'mailto:nikitagholap8706@gmail.com', 
    label: 'Email',
    color: 'hover:text-red-500',
    bg: 'hover:bg-red-50'
  }
];

const techStack = [
  { icon: <SiJavascript className="text-yellow-400" size={24} />, name: 'JavaScript' },
  { icon: <SiReact className="text-blue-400" size={24} />, name: 'React' },
  { icon: <SiNodedotjs className="text-green-500" size={24} />, name: 'Node.js' },
  { icon: <SiMongodb className="text-green-600" size={24} />, name: 'MongoDB' },
  { icon: <SiTailwindcss className="text-cyan-500" size={24} />, name: 'Tailwind CSS' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section 
      ref={ref}
      className="min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-gray-50 py-12"
      onMouseMove={handleMouseMove}
      style={{ paddingTop: '4rem', paddingBottom: '2rem' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-40"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
              boxShadow: '0 0 15px 5px rgba(255,255,255,0.2)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden relative"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Animated border highlight */}
            <motion.div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1), transparent 40%)`,
              }}
            />
            <motion.div 
              className="relative z-10 text-center px-4"
              variants={itemVariants}
            >
              <motion.p 
                className="text-lg md:text-xl font-medium mb-6 text-blue-600"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                👋 Hello, I'm
              </motion.p>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 relative inline-block"
                variants={itemVariants}
              >
                <span className="relative z-10">
                  Nikita Gholap
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-300 -z-0 rounded-full"
                  style={{ 
                    transform: 'skew(-12deg) translateX(-2%)',
                    filter: 'blur(6px)',
                    opacity: 0.5
                  }}
                  animate={{
                    width: ['100%', '105%', '100%'],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.h1>
              
              <motion.div 
                className="text-xl md:text-2xl font-medium mb-6 min-h-[2rem] text-gray-700"
                variants={itemVariants}
              >
                <div className="relative inline-block">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'MERN Stack Developer',
                      2000,
                      'Web Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-gray-900 font-semibold relative z-10"
                  />
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -z-0 opacity-30"
                    animate={{
                      width: ['0%', '100%', '0%'],
                      left: ['0%', '0%', '100%']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-center"
                variants={itemVariants}
              >
                I craft exceptional digital experiences with modern web technologies.
                Let's collaborate and bring your ideas to life!
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-8"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 font-medium group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.span 
                    className="relative z-10"
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FaArrowDown />
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(200px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.2), transparent 40%)`,
                    }}
                  />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 font-medium group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View My Work</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(200px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1), transparent 40%)`,
                    }}
                  />
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/10"
                variants={itemVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-white/60 hover:text-white transition-all duration-300 text-2xl"
                    aria-label={link.name}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="relative z-10">
                      {link.icon}
                    </span>
                    <span className="absolute -inset-2 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                    <motion.span 
                      className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
              

            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center group z-50"
        variants={itemVariants}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-xs text-blue-600 mb-2 font-medium tracking-wider bg-white/80 px-3 py-1 rounded-full shadow-sm">EXPLORE MY WORK</span>
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-blue-100 flex justify-center p-1.5 group-hover:border-blue-200 transition-colors bg-white/50 backdrop-blur-sm"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full"
            animate={{
              y: [0, 6, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
