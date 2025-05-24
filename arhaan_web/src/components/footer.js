import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2a437d",
        color: "#f5f8ff",
        textAlign: "center",
        padding: "1rem 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "0.9rem",
        borderTop: "1px solid #3c5a9e",
        boxShadow: "0 -3px 10px rgba(0, 0, 0, 0.2)",
        userSelect: "none",
      }}
    >
      &copy; {new Date().getFullYear()} Arhaan Technologies. All rights reserved.
    </footer>
  );
};

export default Footer;
