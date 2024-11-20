import React from "react";
import "./Education.css"; // Import CSS for styling

const educationData = [
  {
    college: "PUNE VIDYARTHI GRIHA'S COLLEGE OF ENGINEERING, NASHIK",
    degree: "Bachelor of Engineering - BE",
    branch: "Information Technology",
    date: "2020 - 2023",
  },

  {
    college: "K. K. Wagh Polytechnic, Nashik",
    degree: "Diploma",
    branch: "Computer Technology",
    date: "2017 - 2020",
  },

  {
    college: "Rangubai Junnare English Medium High School, Nashik",
    degree: "SSC",
    branch: "10th",
    date: "2016 - 2017",
  },
  // Add more education records as needed
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.college}</h3>
            <p>
              <strong>{edu.degree}</strong> <br />
              <span>{edu.branch}</span>
            </p>
            <p className="education-date">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
