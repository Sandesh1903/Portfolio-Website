import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/sandesh.kulkarni.5015" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/_Sandesh_1903" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/_._maverick__/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>© 2024 Sandesh Kulkarni. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
