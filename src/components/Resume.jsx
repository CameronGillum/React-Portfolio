import React from "react";
import "../styles/resume.css";

const Resume = () => {
  return (
    <main className="resume-container">
      <h3>Resume:</h3>
      <a href="/assets/resume.pdf" download>
        Download Resume
      </a>

      <section className="proficiency">
        <h4>Front-end Proficiencies:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <section className="proficiency">
        <h4>Back-end Proficiencies:</h4>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </section>
    </main>
  );
};

export default Resume;
