import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: '2022 — Present',
      title: 'Job Title 1',
      company: 'Company Name 1',
      description: 'Job description 1. This is where you describe your role and responsibilities. Include key achievements, technologies you worked with, and the impact you made on the team and product.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5']
    },
    {
      period: '2019 — 2022',
      title: 'Job Title 2',
      company: 'Company Name 2',
      description: 'Job description 2. Describe your responsibilities, the projects you worked on, and the technologies you used. Highlight any notable achievements or contributions to the company\'s success.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5']
    },
    {
      period: '2018 — 2019',
      title: 'Job Title 3',
      company: 'Company Name 3',
      description: 'Job description 3. Talk about your role, the challenges you faced, and how you contributed to the team\'s goals. Include specific examples of your work and the technologies you mastered.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3']
    }
  ];

  return (
    <section id="experience">
      <h3>Experience</h3>
      
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="experience-period">{exp.period}</div>
            <div className="experience-title">
              <h4>{exp.title} · {exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              <div className="tags">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <a href="#" className="archive-link">
        View Full Resume →
      </a>
    </section>
  );
};

export default Experience;
