import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu toggle
import "./Navbar.css"; // Custom CSS for Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Sandesh Kulkarni</a>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
     
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>
        
        <li>
          <a href="#projects">Projects</a>
        </li>
        
        <li>
          <a href="#certifications">Certifications</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>
        
        <li>
          <a href="#contact">Contact</a>
        </li>
     
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
