import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.project');
    let delay = 0; // Start with no delay

    const observerOptions = {
      root: null, // use the viewport as the root
      threshold: 0.5 // Trigger when 50% of the card is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set a delay for each card to appear one by one
          entry.target.style.transitionDelay = `${delay}s`; 
          delay += 0.3; // Increment the delay for the next card

          // Apply class to trigger animation
          entry.target.classList.add('slide-up');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card)); // Cleanup observer
    };
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* Deepfake Detection Project */}
        <div className="project">
          <div className="icon-container orange">
            <i className="fa fa-video-camera"></i>
          </div>
          <h3>Deepfake Detection</h3>
          <p>
            Developed a model using CNN and transformers for deepfake detection, aiming to improve the reliability of video content and reduce the spread of misinformation.
          </p>
        </div>

        {/* Predictive Model for Student Performance */}
        <div className="project">
          <div className="icon-container purple">
            <i className="fa fa-chart-bar"></i>
          </div>
          <h3>Predictive Model for Student Performance</h3>
          <p>
            Built a machine learning model to predict student performance, deployed it through Flask, and integrated it with a user-friendly web interface.
          </p>
        </div>

        {/* Crop Disease Detection */}
        <div className="project">
          <div className="icon-container blue">
            <i className="fa fa-leaf"></i>
          </div>
          <h3>Crop Disease Detection</h3>
          <p>
            Created an image classification model to identify and diagnose plant diseases, leveraging deep learning for real-time disease detection in crops.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
