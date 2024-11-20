import React from "react";
import "./Certifications.css"; // Import the CSS file for custom styling

// Data for certifications in the first list
const certificate1 = [
  {
    title: "Full Stack Java Developer - ExcelR",
    date: "Nov 2023 -- Jul 2024",
    description: "Complete Course on Fullstack Java Development.",
    link: "https://drive.google.com/file/d/1LmSfVCuBXF9UaOiTCWypGdjk5IPwAUnV/view?usp=sharing"
  },
  {
    title: "Campus To Technical Careers Training Program - TNS",
    date: "Jan 2023 -- Jul 2023",
    description: "Professional training on Java Full Stack Development & Soft Skills.",
    link: "https://drive.google.com/file/d/1UsQWKqIRwPGbOTgsZL9CMxM_HVZ0WHZ2/view?usp=sharing"
  }
];

// Data for certifications in the second list
const certificate = [
  {
    title: "Google Data Analytics - Coursera",
    date: "Sep 2022 -- Nov 2022",
    description: "The Google Data Analytics Professional Certificate is a comprehensive program consisting of eight courses developed by Google. This certificate is designed to equip individuals with the necessary skills and knowledge to pursue entry-level roles in the field of Data Analytics.",
    link: "https://coursera.org/share/0cb2162ae03d060a2c93fb323007f263"
  },
  {
    title: "Google UX Design - Coursera",
    date: "Jan 2022 -- Nov 2022",
    description: "The Google UX Design Professional Certificate is a comprehensive program consisting of seven courses developed by Google. This certificate is designed to equip individuals with the necessary skills and knowledge to pursue entry-level roles in the field of UX Design.",
    link: "https://coursera.org/share/e4f602f96f59751a1963c9619415aced"
  }
];

// Certifications Component
const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-section-name">Certifications</h2>

      {/* Parent container to align certifications side by side */}
      <div className="certifications-container">
        {/* First list of certifications */}
        <div className="certifications-list">
          {certificate1.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3>{cert.title}</h3>
              <h4>{cert.date}</h4>
              <p>{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Second list of certifications */}
        <div className="certifications-list1">
          {certificate.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3>{cert.title}</h3>
              <h4>{cert.date}</h4>
              <p>{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
