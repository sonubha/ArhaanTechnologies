import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subheading">
        We’re here to help and answer any question you might have. We look
        forward to hearing from you 🙂
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            <strong>Phone:</strong> +91 81054 06555
          </p>
          <p>
            <strong>Email:</strong> afthabarhan@gmail.com
          </p>
          <p>
            <strong>Address:</strong> Shop No. 101, 1st Floor, Tech Park, Delhi
          </p>
        </div>

        <div className="map-box">
          <iframe
            title="Arhaan Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.322701731996!2d77.2173219!3d28.6139394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31ed1a4d9a9%3A0xcedf962c23ad86e7!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1683368340000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;