import React, { useState } from "react";
import "./About.css";

const reasons = [
  {
    title: "Quality Refurbished Products",
    text: "We offer a wide range of rigorously tested and certified refurbished laptops and desktops, providing excellent performance at a fraction of the cost of new devices.",
  },
  {
    title: "Expert Gaming Solutions",
    text: "Dive into the ultimate gaming experience with our specialized gaming laptops and desktops, built for performance and reliability.",
  },
  {
    title: "Comprehensive Services",
    text: "From laptop and desktop repairs to the installation and maintenance of CCTV, interlock, and intercom systems, we are your one-stop solution for all your technology needs.",
  },
  {
    title: "Genuine Spares",
    text: "Access a wide selection of genuine laptop and desktop spares to keep your devices running smoothly.",
  },
  {
    title: "Trained Technician Team",
    text: "Our dedicated team of highly skilled and trained technicians provides expert services and support, ensuring efficient and reliable solutions.",
  },
  {
    title: "Customer-Centric Approach",
    text: "We prioritize your satisfaction, offering personalized solutions and dedicated support to meet your unique requirements.",
  },
  {
    title: "Cost-Effective Solutions",
    text: "We believe in providing value for money, offering competitive pricing across all our products and services.",
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleReasons = expanded ? reasons : reasons.slice(0, 3);

  return (
    <section id="about" className="about-container">
      <div className="about_us">
        <h1>About Us</h1>
        <p>
          Founded by Arhaan, our vision is to be the leading provider of
          reliable and affordable technology solutions, empowering individuals
          and businesses with access to high-quality refurbished laptops and
          desktops, cutting-edge gaming systems, essential peripherals like
          printers, and comprehensive IT support services. We strive to bridge
          the digital divide by offering sustainable and cost-effective
          technology options, coupled with expert technical assistance and
          security solutions, including CCTV, interlock, and intercom systems.
        </p>
      </div>

      <div className="reason">
        <h1>Why Choose Us</h1>
        <div className="cards-grid">
          {visibleReasons.map((item, index) => (
            <div className="reason-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="toggle-button">
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
