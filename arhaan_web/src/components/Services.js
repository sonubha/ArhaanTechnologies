import React, { useEffect, useState } from "react";
import "./Services.css";
import RefurbishedlaptopImg from "./asset_image/Refurbished Laptop.avif";
import RefurbishedDesktopsImg from "./asset_image/Refurbished Desktops.avif";
import GamingLaptopsDesktops from "./asset_image/Gaming Laptops & Desktops.avif";
import PrintersImg from "./asset_image/printers.jpg";
import LaptopDesktopSparesImg from "./asset_image/LaptopDesktopSpares.jpg";
import CCTVworksImg from "./asset_image/CCTVWorks.png";
import intercomEntranceSystemImg from "./asset_image/intercomEntranceSystem.webp";
import CCTVInstallationAndMaintenanceImg from "./asset_image/CCTV Installation And Maintenance.jpg";

const services = [
  { title: "Refurbished Laptops Sales", image: RefurbishedlaptopImg },
  { title: "Refurbished Desktops", image: RefurbishedDesktopsImg },
  { title: "Gaming Laptops & Desktops", image: GamingLaptopsDesktops },
  { title: "Printers", image: PrintersImg },
  { title: "Laptop Desktop Services", image: LaptopDesktopSparesImg },
  { title: "Laptop & Desktop Spares", image: LaptopDesktopSparesImg },
  { title: "CCTV Works", image: CCTVworksImg },
  { title: "Interlock and Intercom System Installation", image: intercomEntranceSystemImg },
  { title: "CCTV Installation And Maintenance", image: CCTVInstallationAndMaintenanceImg },
];

const Services = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(Date.now()); // Changes on mount
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={`${animationKey}-${index}`}
            className={`service-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <div className="overlay">
                <h3 className="overlay-text">{service.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
