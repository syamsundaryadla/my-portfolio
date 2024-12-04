import React from "react";
import { useInView } from "react-intersection-observer";
import "./AboutMe.css";
import profileImage from "../assets/syam.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const AboutMe = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about-me" ref={sectionRef}>
      <div className="content">
        {/* Image Section with Floating Cards */}
        <div className={`image-section ${inView ? "animate" : ""}`}>
          <img src={profileImage} alt="Syam Sundar" className="main-image" />
          
          {/* Achievement Cards */}
          <div className={`achievement-card card-1 ${inView ? "bubble" : ""}`}>
            <h4>Data Science 📊</h4>
          </div>
          <div className={`achievement-card card-2 ${inView ? "bubble" : ""}`}>
            <h5>Artificial Intelligence 🤖</h5>
          </div>
          <div className={`achievement-card card-3 ${inView ? "bubble" : ""}`}>
            <h4>Machine Learning 🧠</h4>
          </div>
        </div>

        {/* Social Media Links Below Image */}
        <div className="social-media-links">
          <a href="https://www.linkedin.com/in/syam-sundar-yadla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/syamsundaryadla" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://twitter.com/syamsundar3618" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} />
          </a>
          <a href="https://www.instagram.com/_syam.sundar_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
