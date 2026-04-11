import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import config from '../config';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'Android Developer',
        'Backend Developer',
        'UI/UX Enthusiast',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left-Photo */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8, delay:0.2}}
        ><img src="/lp.jpeg" alt="Aayan" className="hero-photo" />
        </motion.div>
        <motion.div className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>   
        <h1>Hi, I'm </h1>
        <h1 className="highlight">Aayan Ansari</h1>
        <h2>I'm a <span ref={typedRef}></span></h2>
        <p>Building modern, responsive web applications.</p>
        <div className="cta-buttons">
          <button onClick={() => window.open(`${config.API_URL}/api/cv/pdf`, '_blank')}>
            Download CV (PDF)
          </button>
          <button onClick={() => window.open(`${config.API_URL}/api/cv/docx`, '_blank')}>
            Download CV (Word)
          </button>
        </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;