import React from 'react';

const skills = {
  'Web-Development': [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'React.js', level: 60 },
    { name: 'Express.js', level: 65 },
  ],
  'Database': [
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'Firebase', level: 80 },
  ],
  'Tools & Technologies': [
    { name: 'Git & GitHub', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 75 },
    { name: 'Android Studio', level: 90 },
    { name: 'Grafana', level: 70 },
  ],
  'Programming': [
    { name: 'C', level: 90 },
    { name: 'C++', level: 70 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 60 },
    { name: 'Rust', level: 70 },
  ],
};

const Skills = () => (
  <section id="skills" data-aos="fade-up">
    <h2>Skills</h2>
    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="skill-category">
        <h3>{category}</h3>
        {items.map(skill => (
          <div key={skill.name} className="skill-bar" title={`${skill.level}% proficiency`}>
            <span className="skill-name">{skill.name}</span>
            <div className="bar">
              <div className="fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    ))}
  </section>
);

export default Skills;