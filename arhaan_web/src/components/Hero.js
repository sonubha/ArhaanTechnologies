import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(timeoutRef.current);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <section id="home" className="hero">
      {/* Background crossfade layers */}
      <div
        className={`bg-image ${fade ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <div
        className={`bg-image ${fade ? "fade-out" : "fade-in"}`}
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src="/Arhaan_logo.png" alt="ArhaanTech Logo" />
          </a>

          <button
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="typing-text">
            Welcome to <br />
            <span className="typing">ArhaanTech</span>
          </h1>
          <p className="fade-in-left delay">
            Innovative solutions for your digital success
          </p>
          <a href="#services" className="hero-btn">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
