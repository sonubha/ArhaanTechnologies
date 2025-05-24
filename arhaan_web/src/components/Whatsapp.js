import React from 'react';
import './Whatsapp.css';

const WhatsappButton = () => {
  const phoneNumber = "918105406555"; 
  const message = "Hello, I'm interested in your services!";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsappButton;


