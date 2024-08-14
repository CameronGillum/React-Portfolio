import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: '/assets/images/project1.jpg', link: '#', repo: '#' },
    // Add five more projects
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.link}>Deployed App</a>
          <a href={project.repo}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
