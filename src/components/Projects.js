import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [{
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
  },
  {
    name: 'Drawdle',
    description: 'Built a full-stack daily drawing web application inspired by Wordle that allows users to create, save, and manage drawings through a secure backend. Designed an interactive drawing interface using the HTML5 Canvas API and implemented authenticated frontend–backend communication with persistent SQL storage.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Figma', 'Canvas API'],
    link: 'https://github.com/Connor-Karr/Drawdle'
  },
  {
    name: 'Cavity Risk Analysis Program',
    description: 'Created a Python-based Bayesian analysis tool to model cavity risk using behavioral and genetic factors. Visualized probabilistic insights and correlations to improve interpretability of risk predictions.',
    technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://colab.research.google.com/drive/1VOmCPpnzG8mk0w-AsnRym_ctdDfg7aku?authuser=1'
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
