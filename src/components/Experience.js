import React from "react";
import "./Experience.css"; // Import CSS for styling

const experienceData = [
  {
    position: "Full Stack Java Developer",
    company: "Ai Variant",
    emp_type: "Internship",
    loc :"Remote",
    date: "Jan 2024 - Sept 2024",
    link: "https://drive.google.com/file/d/1kEM8-BG4u7TkBSowpebTomoIphf_3YpA/view?usp=sharing"
  },

  {
    position: "Campus To Technical Careers Training Program",
    company: "TNS India Foundation",
    emp_type: "Apprenticeship",
    loc :"On-Site",
    date: "Jan 2023 - Jul 2023",
    link: "https://drive.google.com/file/d/1UsQWKqIRwPGbOTgsZL9CMxM_HVZ0WHZ2/view?usp=sharing"
  },

  {
    position: "Summer Internship",
    company: "Golden Dreams Software Solution",
    emp_type: "Internship",
    loc :"On-Site",  
    date: "May 2019 - Jun 2019",
    link: ""
  },
  // Add more experience records as needed
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.position}</h3>
            <p>
              <strong>{exp.company}</strong> <br />
              <span>{exp.emp_type}</span>
              <span>{exp.loc}</span>
            </p>
            <p className="experience-date">{exp.date}</p>
            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
