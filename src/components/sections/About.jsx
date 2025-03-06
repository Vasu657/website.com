import React, { useEffect, useRef } from 'react';
import { FiUser, FiBriefcase, FiCode, FiAward, FiDownload } from 'react-icons/fi';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  
  // Add intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My Introduction</p>
          <div className="title-bar"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image-container fade-in">
            <div className="about-image-wrapper">
              <img 
                src="/assets/images/about.png" 
                alt="About Me" 
                className="about-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/about.png';
                }}
              />
              <div className="experience-badge">
                <span className="experience-years">1+</span>
                <span className="experience-text">Years of Experience</span>
              </div>
            </div>
            <div className="about-shape-1"></div>
            <div className="about-shape-2"></div>
          </div>
          
          <div className="about-details">
            <p className="about-text fade-in">
              I'm a passionate web developer with expertise in building modern, responsive 
              web applications. With a strong foundation in front-end and back-end technologies,
              I create seamless user experiences that are both functional and visually appealing.
            </p>
            
            <div className="info-boxes fade-in">
              <div className="info-box">
                <div className="info-icon">
                  <FiUser />
                </div>
                <div className="info-content">
                  <h3>Profile</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
              
              <div className="info-box">
                <div className="info-icon">
                  <FiBriefcase />
                </div>
                <div className="info-content">
                  <h3>Experience</h3>
                  <p>1+ Years</p>
                </div>
              </div>
              
              <div className="info-box">
                <div className="info-icon">
                  <FiCode />
                </div>
                <div className="info-content">
                  <h3>Tech Stack</h3>
                  <p>MERN, React Native</p>
                </div>
              </div>
              
              <div className="info-box">
                <div className="info-icon">
                  <FiAward />
                </div>
                <div className="info-content">
                  <h3>Education</h3>
                  <p>B.E. Computer Science</p>
                </div>
              </div>
            </div>
            
            <div className="personal-info fade-in">
              <div className="personal-info-title">
                <h3>Personal Information</h3>
                <div className="info-bar"></div>
              </div>
              
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Vasu Ghanta</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">vasughanta660@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">+91 (911) 380-8288</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Bangalore, India</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages:</span>
                  <span className="info-value">English, Hindi, Telugu, Kannada</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Availability:</span>
                  <span className="info-value">Freelance/Full-time</span>
                </div>
              </div>
            </div>
            
            <div className="about-cta fade-in">
              <a href="/resume.pdf" className="btn btn-primary" download>
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;