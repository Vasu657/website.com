import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  // Project data
  const projects = [
    {
      id: 1,
      title: "DevConnect - Developer Social Network",
      description: "A full-stack social platform for developers to share projects, connect, and collaborate. Features include real-time chat, project showcasing, and skill matching.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux"],
      image: "assets/images/p-1.png",
      category: "fullstack",
      github: "https://github.com/Vasu657",
      demo: "https://dev-connect-demo.netlify.app",
      featured: true,
      details: "DevConnect is a comprehensive platform built to help developers find collaborators and showcase their work. The application includes user authentication with JWT, real-time messaging using Socket.io, a post feed with commenting and liking functionality, and profile pages with GitHub repository integration."
    },
    {
      id: 2,
      title: "CloudTask - Task Management System",
      description: "A task management application with team collaboration features, drag-and-drop interfaces, and analytics dashboards.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Chart.js"],
      image: "assets/images/p-2.png",
      category: "frontend",
      github: "https://github.com/Vasu657",
      demo: "https://cloud-task-app.netlify.app",
      featured: false,
      details: "CloudTask helps teams organize their work with features like task assignment, due dates, comments, file attachments, and progress tracking. The UI is built with Material-UI components and features a responsive design with dark mode support."
    },
    {
      id: 3,
      title: "EcoMerce - Sustainable E-commerce Platform",
      description: "An e-commerce platform focused on eco-friendly products with advanced filtering, payment processing, and order management.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
      image: "assets/images/p-3.png",
      category: "fullstack",
      github: "https://github.com/Vasu657",
      demo: "https://eco-merce-demo.vercel.app",
      featured: true,
      details: "EcoMerce includes product recommendations, user authentication, shopping cart functionality, secure checkout with Stripe, order history, and admin dashboard for inventory management. The application is built with Next.js for server-side rendering and optimized performance."
    },
    {
      id: 4,
      title: "DataVizPro - Interactive Data Visualization",
      description: "A dashboard application for creating interactive data visualizations with customizable charts, graphs, and export options.",
      technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB", "GraphQL"],
      image: "assets/images/p-4.png",
      category: "fullstack",
      github: "https://github.com/Vasu657",
      demo: "https://data-viz-pro.netlify.app",
      featured: false,
      details: "DataVizPro allows users to upload CSV or JSON data, create customized visualizations using D3.js, and export them in various formats. The application includes user authentication, saved visualizations, and sharing capabilities."
    },
    {
      id: 5,
      title: "CodeReview - Code Review Platform",
      description: "A collaborative platform for code reviews with inline commenting, version control integration, and automated code quality checks.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "GitLab API"],
      image: "assets/images/p-5.png",
      category: "fullstack",
      github: "https://github.com/Vasu657",
      demo: "https://code-review-app.herokuapp.com",
      featured: true,
      details: "CodeReview integrates with GitHub and GitLab repositories, allowing teams to conduct code reviews with features like inline commenting, approval workflows, automated testing integration, and code quality metrics tracking."
    },
    {
      id: 6,
      title: "TravelBuddy - Travel Planning App",
      description: "A travel planning application with itinerary creation, location bookmarking, and personalized recommendations.",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "AWS"],
      image: "assets/images/p-6.png",
      category: "mobile",
      github: "https://github.com/Vasu657",
      demo: "https://travel-buddy-demo.netlify.app",
      featured: false,
      details: "TravelBuddy helps users plan trips by providing destination information, allowing itinerary creation, and offering recommendations based on user preferences. The app includes offline maps, weather forecasts, and travel expense tracking."
    }
  ];

  // Filter projects based on category and search term
  useEffect(() => {
    const filteredProjects = projects.filter(project => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
    
    setVisibleProjects(filteredProjects);
  }, [activeFilter, searchTerm]);

  // Animate projects on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));

    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, [visibleProjects]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Scroll to top of projects section
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'frontend', name: 'Front-End' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2>My Projects</h2>
          <p>Explore my latest work and side projects</p>
        </div>

        <div className="projects-controls fade-in">
          <div className="filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="search-view-controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <i className="search-icon">🔍</i>
            </div>
            
            <div className="view-toggle">
              <button 
                className={`view-btn ${isGridView ? 'active' : ''}`} 
                onClick={() => setIsGridView(true)}
                aria-label="Grid view"
              >
                <i className="grid-icon">⊞</i>
              </button>
              <button 
                className={`view-btn ${!isGridView ? 'active' : ''}`} 
                onClick={() => setIsGridView(false)}
                aria-label="List view"
              >
                <i className="list-icon">☰</i>
              </button>
            </div>
          </div>
        </div>

        {visibleProjects.length === 0 ? (
          <div className="no-projects-message fade-in">
            <h3>No projects found</h3>
            <p>Try changing your search or filter criteria</p>
          </div>
        ) : (
          <div className={`projects-container ${isGridView ? 'grid-view' : 'list-view'}`}>
            {visibleProjects.map(project => (
              <div 
                key={project.id} 
                className={`project-card fade-in ${project.featured ? 'featured' : ''}`}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <button className="link-btn github-btn">
                        <i className="github-icon">📂</i> GitHub
                      </button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <button className="link-btn demo-btn">
                        <i className="demo-icon">🔗</i> Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectModal}>×</button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              {selectedProject.featured && <span className="featured-badge modal-badge">Featured</span>}
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <h3>Project Overview</h3>
                <p>{selectedProject.details}</p>
                
                <h3>Technologies Used</h3>
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <button className="btn github-btn">
                      <i className="github-icon">📂</i> View on GitHub
                    </button>
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <button className="btn demo-btn">
                      <i className="demo-icon">🔗</i> View Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;