import React from "react";
import "./Hero.css";
import profileImage from "../assets/syam2.jpg"; // Correct image import

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="image-container">
          <img
            src={profileImage} // Use the imported image path here
            alt="Team"
            className="team-image"
          />
        </div>
        <div className="text-container">
          <h2 className="hero-heading">About Me</h2>
          <p className="hero-text">
            Hi, I’m Syam Sundar, a B.Tech 3rd-year student passionate about data science, machine learning,
            and web development. I’ve worked on projects involving traffic management, deep fake detection, and student performance prediction.
            I’m actively exploring opportunities in AI and data science, aiming to combine my skills to build innovative solutions and eventually
            start a tech-driven business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
