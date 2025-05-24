// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
   <nav className="navbar">
  <div className="nav-container">
    <a href="#home" className="nav-logo">
      <img src="/Arhaan_logo.png" alt="ArhaanTech Logo" />
    </a>

    <button
      className={`nav-toggle ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>

    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><a href="#home" onClick={closeMenu}>Home</a></li>
      <li><a href="#services" onClick={closeMenu}>Services</a></li>
      <li><a href="#about" onClick={closeMenu}>About</a></li>
      <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
