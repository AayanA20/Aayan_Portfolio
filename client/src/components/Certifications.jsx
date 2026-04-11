import React from 'react';

const certs = [
  {
    title: 'JAVA Foundation Certification',
    platform: 'Infosys Springboard',
    image: '/certificates/cert1.jpeg',
  },
  {
    title: 'C for Everyone, Santa Cruz',
    platform: 'Coursera',
    image: '/certificates/cert2.jpeg',
  },
  {
    title: 'Cybersecurity Workshop',
    platform: 'JKLU',
    image: '/certificates/cert3.jpeg',
  },
];

const Certifications = () => (
  <section id="certifications" data-aos="fade-up">
    <h2>Certifications &amp; Achievements</h2>
    <div className="certs-grid">
      {certs.map((cert, i) => (
        <div className="cert-card" key={i}>
          <h3>{cert.title}</h3>
          <p>{cert.platform}</p>
          <a href={cert.image} target="_blank" rel="noreferrer">View Certificate</a>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;