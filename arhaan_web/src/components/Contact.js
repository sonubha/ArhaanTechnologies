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
            <strong>Address:</strong> Slv Spring Fields 2, MS Ramaiah North
            City, Manayata Tech Park, Nagavara, Bengaluru, Karnataka 560045
          </p>
        </div>

        <div className="map-box">
          <iframe
            title="Arhaan Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8910433892224!2d77.61961802507766!3d13.04260678727927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176e8795c299%3A0x3107df706e694d7b!2sSlv%20Spring%20Fields%202%2C%20MS%20Ramaiah%20North%20City%2C%20Manayata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1748097735982!5m2!1sen!2sin"
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
