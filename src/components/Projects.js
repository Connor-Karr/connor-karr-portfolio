import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Project Name 1',
      description: 'Project description 1. Explain what the project does, what problem it solves, and what technologies you used to build it. Include any notable features or achievements.',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4', 'Technology 5'],
      link: 'https://github.com/yourusername/project-1'
    },
    {
      name: 'Project Name 2',
      description: 'Project description 2. Describe the project\'s purpose, key features, and the impact it had. Highlight the technologies and methodologies you used to bring it to life.',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4'],
      link: 'https://github.com/yourusername/project-2'
    },
    {
      name: 'Project Name 3',
      description: 'Project description 3. Talk about what inspired the project, how you built it, and what you learned along the way. Include metrics or feedback if available.',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
      link: 'https://github.com/yourusername/project-3'
    },
    {
      name: 'Project Name 4',
      description: 'Project description 4. Share the story behind this project, the challenges you overcame, and the technologies you leveraged to create a successful outcome.',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4'],
      link: 'https://github.com/yourusername/project-4'
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

      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="archive-link">
        View Full Project Archive →
      </a>
    </section>
  );
};

export default Projects;
