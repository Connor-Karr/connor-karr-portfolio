import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
  {
    name: 'QuantumWealth',
    description: 'Built a full-stack portfolio risk analysis platform that uses Monte Carlo simulation to forecast long-term multi-asset investment outcomes. Implemented statistical risk models including Value at Risk, Conditional VaR, Sharpe ratio, and volatility through a RESTful Express API, and developed an interactive React interface with dynamic parameter controls and data visualizations to support portfolio rebalancing and risk evaluation.',
    technologies: ['React', 'Node.js', 'Express', 'Recharts', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/Connor-Karr/QuantumWealth'
  },
  {
    name: 'Drawdle',
    description: 'Developed a full-stack daily drawing web application with secure user authentication, persistent drawing storage, and prompt-based content delivery. Built a responsive HTML5 Canvas drawing interface with real-time rendering and touch support, and implemented a modular Node.js backend with JWT authentication, encrypted credentials, and a normalized SQL database for scalable deployment.',
    technologies: ['Node.js', 'Express', 'HTML5 Canvas', 'SQL', 'JWT', 'JavaScript'],
    link: 'https://github.com/Connor-Karr/Drawdle'
  },
  {
    name: 'Netflix Watch Party Organizer',
    description: 'Created a machine-learning–driven web application that clusters streaming content into personalized playlists using K-Means clustering. Engineered feature-rich content representations, applied dimensionality reduction to preserve variance, and exposed playlist generation through a Flask-based REST API to deliver near-instant recommendations and significantly reduce content discovery time.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'SQLite', 'JavaScript'],
    link: 'https://github.com/Connor-Karr/Netflix-Watch-Party-Organizer'
  },
  {
    name: 'TAMID News Platform',
    description: 'Contributed to a full-stack news platform with separate producer and consumer interfaces, supporting article creation, editing, tagging, search, and pagination. Worked across authentication, content management, and UI features using a containerized Flask-based architecture.',
    technologies: ['Flask', 'MySQL', 'Jinja2', 'HTML', 'CSS', 'JavaScript', 'Docker'],
    link: 'https://github.com/TamidNu/TaNews/'
  },
  {
    name: 'FridgeFriend',
    description: 'Developed a data-driven mobile application that combines fridge inventory tracking, personalized nutrition goals, and dynamic recipe recommendations to reduce food waste and decision fatigue. The system adapts suggestions based on real-time inventory and evolving user preferences.',
    technologies: ['Mobile App Design', 'Data Modeling', 'Nutrition Tracking', 'UI/UX'],
    link: 'https://github.com/Connor-Karr/25S-Fridge-Friend'
  }
  ];

  return (
    <section id="projects">
      <h3>Projects</h3>
      
      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <div className="project-header">
            <div className="project-title">
              <h4>{project.name}</h4>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}

      <a href="https://github.com/Connor-Karr" target="_blank" rel="noopener noreferrer" className="archive-link">
        View Full Project Archive →
      </a>
    </section>
  );
};

export default Projects;
