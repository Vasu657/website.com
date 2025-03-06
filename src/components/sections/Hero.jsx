import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const hero = heroRef.current;
      const parallaxElements = hero.querySelectorAll('.parallax');
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1 parallax" data-speed="-0.1"></div>
          <div className="shape shape-2 parallax" data-speed="0.08"></div>
          <div className="shape shape-3 parallax" data-speed="-0.06"></div>
          <div className="shape shape-4 parallax" data-speed="0.04"></div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-intro">
              <span className="greeting">Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="name">Vasu Ghanta</span>
              <motion.span 
                className="role"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Web Developer
              </motion.span>
            </h1>
            <p className="hero-subtitle">
              I build modern web applications with a focus on user experience, 
              performance, and clean code.
            </p>
            
            <div className="hero-actions">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch <FiArrowRight />
              </motion.a>
              <motion.a 
                href="/assets/images/resume.pdf" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download CV <FiDownload />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="profile-image-container">
              <div className="profile-background"></div>
              <img 
                src="/assets/images/profile.png" 
                alt="Your Name" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/p-1.png';
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;