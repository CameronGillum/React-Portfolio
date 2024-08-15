import React from 'react';
import '../styles/About.css';

const AboutMe = () => {
  return (
    <section className='about'>
      <img src='../public/assets/images/Cameron-Gillum.png' alt='A picture of the developer of this page.' />
      <p>
        This is a short bio about the developer.
      </p>
    </section>
  );
};

export default AboutMe;
