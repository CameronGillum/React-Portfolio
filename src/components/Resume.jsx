import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <a href="/assets/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies:</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
