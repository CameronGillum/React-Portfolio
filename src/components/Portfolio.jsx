import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Project 2",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Project 3",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Project 4",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Project 5",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
    {
      title: "Project 6",
      image: "/assets/images/project1.jpg",
      link: "#",
      repo: "#",
    },
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
