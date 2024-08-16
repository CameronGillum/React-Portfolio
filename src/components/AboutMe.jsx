import React from "react";
import "../styles/About.css";

const AboutMe = () => {
  return (
    <section className="about">
      <img
        src="../public/assets/images/Cameron-Gillum.png"
        alt="A picture of the developer of this page."
      />
      <p>
        My name is Cameron Gillum and I am a learning full stack web developer.
        I have experience with HTML, CSS, JavaScript, Node.js, Express.js, SQL,
        and React. I am currently working on expanding my knowledge of React. I
        am excited to continue to grow my skills and work on new projects and
        push myself to learn new things.
      </p>
    </section>
  );
};

export default AboutMe;
