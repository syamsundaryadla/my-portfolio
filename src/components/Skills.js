import React from "react";
import { FaDatabase, FaRobot, FaLaptopCode, FaBrain, FaMagic, FaBook } from "react-icons/fa"; // Import additional icons
import "./Skills.css"; // External CSS file for styling

const skillsData = [
  {
    id: 1,
    title: "Data Science",
    description:
      "Proficient in analyzing data, creating models, and deriving insights to solve complex problems.",
    icon: <FaDatabase size={40} color="#4a90e2" />,
  },
  {
    id: 2,
    title: "Machine Learning",
    description:
      "Skilled in building predictive models, deep learning, and algorithm optimization.",
    icon: <FaRobot size={40} color="#ff6b6b" />,
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Expertise in developing responsive, user-friendly websites using modern technologies.",
    icon: <FaLaptopCode size={40} color="#50c878" />,
  },
  {
    id: 4,
    title: "Generative AI",
    description:
      "Expertise in creating AI models for text, image, and video generation using advanced algorithms.",
    icon: <FaMagic size={40} color="#ff8c00" />,
  },
  {
    id: 5,
    title: "Deep Learning",
    description:
      "In-depth knowledge of neural networks, computer vision, and natural language processing.",
    icon: <FaBrain size={40} color="#8a2be2" />,
  },
  {
    id: 6,
    title: "Large Language Models (LLMs)",
    description:
      "Proficient in working with GPT, BERT, and other transformer-based architectures for NLP tasks.",
    icon: <FaBook size={40} color="#f39c12" />,
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills That Define My Expertise</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
