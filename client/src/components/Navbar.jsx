import React, { useState } from 'react';

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="navbar">
      <span className="logo">Portfolio</span>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;