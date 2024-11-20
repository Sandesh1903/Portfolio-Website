import React from "react";
import { FaFolderOpen } from "react-icons/fa"; // Import the icon for projects
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">

        <a href="https://github.com/Sandesh1903/Portfolio-Website" target="_blank" rel="noopener noreferrer">
        <div className="project-item">
          <div className="project-header">
            <FaFolderOpen className="project-icon" />
            <p>Project 1</p>
          </div>
          <h3>Portfolio Website</h3>
          <p>2024</p>
          <p>A personal Portfolio to showcase the Knowledge of the technologies tha I have learn.</p>
        </div>
        </a>

        <a href="https://github.com/Sandesh1903/Online-Banking-System" target="_blank" rel="noopener noreferrer">
          <div className="project-item">
            <div className="project-header">
              <FaFolderOpen className="project-icon" />
              <p>Project 2</p>
            </div>
            <h3>NOVA Online Banking System</h3>
            <p>June 2024 -- Sept 2024</p>
            <p>NOVA Online Banking System, is an online website platform where users can manage their finance easily.
            </p>
          </div>
        </a>

        <a href="https://github.com/Sandesh1903/Smart-Human-Resource-Management-System" target="_blank" rel="noopener noreferrer">
          <div className="project-item">
            <div className="project-header">
              <FaFolderOpen className="project-icon" />
              <p>Project 3</p>
            </div>
            <h3>Smart HR & Recruitment System</h3>
            <p>June 2022 -- May 2023</p>
            <p>With its user-friendly interface, the Smart HR and Recruitment System provides a seamless experience for both recruiters and applicants.
            </p>
          </div>
        </a>

        <div className="project-item">
          <div className="project-header">
            <FaFolderOpen className="project-icon" />
            <p>Project 4</p>
          </div>
          <h3>Onshop E-commerce Website</h3>
          <p>May 2019 - Jun 2019</p>
          <p>The objective of the Project given is to understand the functionality of Java and different functional component of Java</p>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
