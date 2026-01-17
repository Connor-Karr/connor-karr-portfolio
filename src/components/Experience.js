import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
      {
      period: 'July 2025 —\nDecember 2025',
      title: 'Fintech Software Engineer',
      company: 'Priceline · Booking Holdings Inc.',
      description: 'Worked on production backend systems supporting large-scale financial transactions for Priceline’s booking platform. Collaborated with a small engineering team to enhance transaction monitoring microservices, develop REST APIs for validation and error segmentation workflows, and improve data integrity through SQL-driven analysis and testing. Contributed to system reliability and streamlined financial reconciliation processes across multiple booking platforms and payment processors.',
      skills: ['Java', 'REST APIs', 'SQL', 'Postman', 'DBeaver', 'Microservices'],
      link: 'https://www.priceline.com/'
    },
    {
      period: 'June 2020 —\nAugust 2024',
      title: 'Senior Counselor',
      company: 'SummerTech at Purchase College',
      description: 'Taught middle school students Java and Python programming, guiding learners from foundational concepts to more advanced data structures and logic. Supervised junior counselors, supported students with learning and social disabilities, and documented academic and social progress through detailed evaluations. Focused on creating an inclusive and structured learning environment while developing leadership and communication skills.',
      skills: ['Java', 'Python', 'Teaching', 'Mentorship', 'Leadership', 'Curriculum Development'],
      link: 'https://www.summertech.net/'
    },
    {
      period: 'May 2024 —\nPresent',
      title: 'Coding Tutor',
      company: 'Coditum & Wyzant',
      description: 'Mentor students through individualized, project-based coding instruction across a range of programming languages and experience levels. Emphasize strong fundamentals while helping students apply concepts through hands-on projects and real-world problem solving in web development and software engineering.',
      skills: ['JavaScript', 'React', 'Python', 'HTML', 'CSS', 'Lua'],
      link: 'https://www.wyzant.com/'
    },
    {
      period: 'January 2025 —\nPresent',
      title: 'Tech Consulting Foundations Member',
      company: 'TAMID at Northeastern',
      description: 'Built a responsive news platform for TAMID, developing the frontend with React and implementing backend APIs using Flask and MySQL. Focused on clean UI design, data-driven content management, and full-stack integration to support student-led consulting initiatives.',
      skills: ['React', 'Flask', 'MySQL', 'Full-Stack Development', 'API Design'],
      link: 'https://www.nutamid.org/tech-consulting'
    },
    {
      period: 'September 2024 —\nJanuary 2025',
      title: 'Web Development Team Member',
      company: 'Northeastern Electric Racing',
      description: 'Contributed to the development of Finishline, a project and team management platform for a collegiate electric racing team. Worked collaboratively to improve features for tracking deadlines, progress, and technical developments, supporting better coordination across subteams.',
      skills: ['Web Development', 'JavaScript', 'Team Collaboration', 'UI Development'],
      link: 'https://electricracing.northeastern.edu/'
    }
  ];

  return (
    <section id="experience">
      <h3>Experience</h3>
      
      {experiences.map((exp, index) => (
        <a
          key={index}
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-item"
        >
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
        </a>
      ))}

      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="archive-link"
      >
        View Full Resume →
      </a>
    </section>
  );
};

export default Experience;