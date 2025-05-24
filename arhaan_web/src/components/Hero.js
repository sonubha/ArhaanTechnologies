import React, { useState, useEffect } from "react";
import "./Hero.css";
import logo from "./asset_image/Arhaan_logo.png";




const images = [
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataFirst, setDataFirst] = useState(true); // toggles which pseudo element shows
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFirst((prev) => !prev);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Determine which image goes to ::before and which goes to ::after based on dataFirst
  const firstImage = dataFirst
    ? images[currentIndex]
    : images[(currentIndex - 1 + images.length) % images.length];
  const secondImage = dataFirst
    ? images[(currentIndex - 1 + images.length) % images.length]
    : images[currentIndex];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <section id="home" className="hero">
      <div
        className="bg-image"
        data-first={dataFirst}
        style={{
          "--first-image": `url(${firstImage})`,
          "--second-image": `url(${secondImage})`,
        }}
      ></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src={logo} alt="ArhaanTech Logo" />
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
