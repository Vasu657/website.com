import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = {
    frontend: [
      { name: 'React & Next.js', level: 'Expert', icon: '⚛️', percentage: 95, description: 'Building scalable SPAs and server-side rendered applications with modern React patterns and Next.js framework.' },
      { name: 'TypeScript', level: 'Advanced', icon: '📘', percentage: 90, description: 'Type-safe JavaScript development with advanced TypeScript features including generics and utility types.' },
      { name: 'Modern CSS', level: 'Expert', icon: '🎨', percentage: 95, description: 'CSS3, Sass, Tailwind CSS, CSS Modules, Styled Components, and advanced animations.' },
      { name: 'UI/UX Design', level: 'Advanced', icon: '🖌️', percentage: 85, description: 'Creating user-centered designs with Figma, responsive layouts, and accessibility best practices.' },
    ],
    backend: [
      { name: 'Node.js & Express', level: 'Expert', icon: '🛠️', percentage: 92, description: 'RESTful API development, authentication systems, and microservices architecture.' },
      { name: 'Python & Django', level: 'Advanced', icon: '🐍', percentage: 88, description: 'Full-stack development with Djangos MVT architecture and REST framework.' },
      { name: 'Database Design', level: 'Expert', icon: '🗄️', percentage: 94, description: 'SQL and NoSQL database modeling, optimization, and querying (PostgreSQL, MongoDB).' },
      { name: 'GraphQL', level: 'Advanced', icon: '📊', percentage: 86, description: 'Schema design, resolvers, and integration with React using Apollo Client.' },
    ],
    devops: [
      { name: 'CI/CD Pipelines', level: 'Advanced', icon: '🔄', percentage: 85, description: 'Automated testing and deployment with GitHub Actions, Jenkins, and CircleCI.' },
      { name: 'Docker & Kubernetes', level: 'Advanced', icon: '🐳', percentage: 82, description: 'Containerization, orchestration, and microservices deployment on cloud platforms.' },
      { name: 'AWS Services', level: 'Advanced', icon: '☁️', percentage: 88, description: 'EC2, S3, Lambda, DynamoDB, and serverless architecture implementation.' },
      { name: 'DevSecOps', level: 'Intermediate', icon: '🔒', percentage: 78, description: 'Implementing security best practices throughout the development lifecycle.' },
    ],
    other: [
      { name: 'Testing', level: 'Advanced', icon: '🧪', percentage: 87, description: 'TDD with Jest, React Testing Library, Cypress for E2E testing, and test coverage optimization.' },
      { name: 'Performance Optimization', level: 'Expert', icon: '⚡', percentage: 91, description: 'Web vitals optimization, bundle size reduction, and rendering performance techniques.' },
      { name: 'System Architecture', level: 'Advanced', icon: '🏗️', percentage: 89, description: 'Designing scalable applications with microservices, serverless, and event-driven patterns.' },
      { name: 'Agile Development', level: 'Expert', icon: '🔄', percentage: 93, description: 'Scrum methodology, sprint planning, and continuous delivery practices.' },
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <div className={`section-title ${isVisible ? 'animate' : ''}`}>
          <h2>Technical Expertise</h2>
          <p>My professional skillset as a full-stack developer</p>
        </div>

        <div className="skills-tabs">
          <div className="tab-buttons">
            <button 
              className={activeTab === 'frontend' ? 'active' : ''} 
              onClick={() => handleTabChange('frontend')}
            >
              <span className="tab-icon">🎭</span>
              <span className="tab-text">Frontend</span>
            </button>
            <button 
              className={activeTab === 'backend' ? 'active' : ''} 
              onClick={() => handleTabChange('backend')}
            >
              <span className="tab-icon">⚙️</span>
              <span className="tab-text">Backend</span>
            </button>
            <button 
              className={activeTab === 'devops' ? 'active' : ''} 
              onClick={() => handleTabChange('devops')}
            >
              <span className="tab-icon">🚀</span>
              <span className="tab-text">DevOps</span>
            </button>
            <button 
              className={activeTab === 'other' ? 'active' : ''} 
              onClick={() => handleTabChange('other')}
            >
              <span className="tab-icon">🧠</span>
              <span className="tab-text">Other</span>
            </button>
          </div>

          <div className="skills-content">
            {Object.keys(skills).map((category) => (
              <div 
                key={category} 
                className={`skills-category ${activeTab === category ? 'active' : ''}`}
              >
                <div className="skills-grid">
                  {skills[category].map((skill, index) => (
                    <div 
                      key={index} 
                      className={`skill-card ${isVisible ? 'animate' : ''}`} 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="skill-percentage">
                        <div className="percentage-circle">
                          <span className="percentage-number">{skill.percentage}%</span>
                        </div>
                      </div>
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-info">
                        <h3>{skill.name}</h3>
                        <div className="skill-level">
                          <span className={`level-badge ${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="skill-desc">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;