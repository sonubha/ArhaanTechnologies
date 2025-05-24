import React from 'react';
import './Social.css'; // CSS imported separately

const socialMedia = [
  { name: 'Facebook', icon: 'fa-facebook', color: '#3b5998' },
  { name: 'Twitter', icon: 'fa-twitter', color: '#00aced' },
  { name: 'Google', icon: 'fa-google-plus', color: '#dd4b39' },
  { name: 'Instagram', icon: 'fa-instagram', color: '#e4405f' },
];

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2 className="social-heading">Our Social Links</h2>
      <ul className="social-list">
        {socialMedia.map((social, index) => (
          <li key={index} style={{ '--hover-color': social.color }}>
            <a href="/">
              <i className={`fa ${social.icon}`} aria-hidden="true"></i>
              <span>- {social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
