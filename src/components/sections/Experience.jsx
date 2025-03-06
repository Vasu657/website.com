import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    // Animation for fade-in effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title fade-in">Professional Experience</h2>
        
        <div className="experience-card fade-in">
          <div className="card-header">
            <h3 className="role-title">Associate Software Engineer</h3>
            <div className="company-badge">CYE Technology Pvt Ltd</div>
          </div>
          
          <div className="experience-duration">
            <div className="duration-pill">1 Year</div>
            <div className="dates">June 2023 - Present</div>
          </div>
          
          <div className="card-content">
            <div className="skills-container">
              {['React', 'JavaScript', 'CSS', 'UI/UX', 'Node.js'].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            <div className="responsibilities">
              <ul>
                <li>Developed responsive user interfaces using React and modern CSS techniques</li>
                <li>Collaborated with UX designers to implement pixel-perfect designs</li>
                <li>Optimized front-end performance and improved loading times by 30%</li>
                <li>Participated in code reviews and implemented best practices for front-end architecture</li>
              </ul>
            </div>
            
            <div className="achievements">
              <h4>Key Achievement</h4>
              <p>Successfully redesigned the company's main product dashboard, improving user engagement by 40% and receiving positive client feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;