import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFigma } from "react-icons/fa";
import "./Home.css";

const typewriterTexts = ["Full-Stack Web Developer", "Front-End Developer", "React Developer", "UI/UX Designer"];

const Home = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typewriterTexts[currentIndex];
      setText(currentText.slice(0, text.length + 1));

      if (text === currentText) {
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length);
          setText("");
        }, 1000); // Pause before switching to the next text
      }
    };

    const typingInterval = setTimeout(handleTyping, 150); // Adjust typing speed

    return () => clearTimeout(typingInterval);
  }, [text, currentIndex]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Sandesh Kulkarni</h1>
        <div className="typewriter-container">
          <p className="typewriter">I am a {text}</p>
        </div>
        <button className="download-cv">Download CV</button>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sandesh-kulkarni-40250423b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Sandesh1903" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.figma.com/files/team/1207262135165584994/user/1207262121844584392?fuid=1207262121844584392" target="_blank" rel="noopener noreferrer">
            <FaFigma />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
