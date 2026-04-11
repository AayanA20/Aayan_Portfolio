import React from 'react';

const projects = [
  {
    title: 'E-Commerce App',
    description: 'Android app with item listing, deleting, buying and cart operations with sample payment window',
    tech: ['Android-Studio', 'Firebase', 'JAVA'],
    github: 'https://github.com/AayanA20/E-Commerce-App',
  },
  {
    title: 'Intelligent API-Abuse Detection System',
    description: 'Designed a system to detect and prevent API abuse by analysing user behaviour and limiting/restricting requests',
    tech: ['SpringBoot', 'JAVA', 'Postman', 'PostgreSQL'],
    github: 'https://github.com/AayanA20/intelligent-api-monitoring-system',
  },
  {
    title: 'NOC/CSOC',
    description: 'A web-based video stream monitoring system for network and cyber-security operations',
    tech: ['Grafana', 'HTML&CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/AayanA20/CN_Project',
  },
];

const Projects = () => (
  <section id="projects" data-aos="fade-up">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map(p => (
        <div className="project-card" key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="tech-badges">
            {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
          <div className="project-links">
            <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;