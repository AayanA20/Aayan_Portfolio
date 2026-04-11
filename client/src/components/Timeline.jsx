import React from 'react';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'B.Tech CSE',
    place: 'JK Lakshmipat University',
  },
  {
    year: 'July 2025',
    title: 'Android Development Intern',
    place: 'TechFly IT Solutions and Training',
  },
  {
    year: '2022 - 2023',
    title: 'Higher Secondary (12th)',
    place: 'GS Jangid Memorial School',
  },
];


const Timeline = () => (
  <section id="timeline" data-aos="fade-up">
    <h2>Education &amp; Experience</h2>
    <div className="timeline">
      {timelineData.map((item, i) => (
        <div className="timeline-item" key={i} data-aos="fade-left" data-aos-delay={i * 200}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;