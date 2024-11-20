import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css"; // Add your styles here

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Experience/>
      <Education/>
      <Projects />
      <Certifications />
      <Skills />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
