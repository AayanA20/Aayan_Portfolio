import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
const About = () => (
  <section id="about" data-aos="fade-up">
    <h2>About Me</h2>
    <div className="about-content">
      <div>
        <p>
          I am a computer science undergraduate with a keen 
          interest in Cyber Security and a strong foundation in DSA.
          I thrive on solving complex problems through competitive programming
          and I am passionate about how system works and how to make it robust, efficient
          and secure.
        </p>
        <p><MdLocationOn /> Jaipur, India</p>
        <p><MdWork /> Student / Fresher</p>
      </div>
    </div>
  </section>
);

export default About;