import React from "react";
import "../../styles/Projects.css";
import "../../styles/Home.css";

const projects = [
  {
    name: "Project 1",
    image:
      "https://github.com/byunn90/Tech-Blog-MVC/raw/main/Assets/blogposts.png",
    githubLink: "https://github.com/byunn90/Tech-Blog-MVC",
    deployedLink: "https://shrouded-taiga-72180.herokuapp.com/",
  },
  {
    name: "Project 2",
    image: "https://github.com/byunn90/quizzer/raw/main/images/quizzGame.png",
    githubLink: "https://github.com/byunn90/quizzer",
    deployedLink: "https://byunn90.github.io/quizzer/",
  },
  {
    name: "Project 2",
    image: "https://github.com/byunn90/quizzer/raw/main/images/quizzGame.png",
    githubLink: "https://github.com/byunn90/quizzer",
    deployedLink: "https://byunn90.github.io/quizzer/",
  },

  {
    name: "Project 2",
    image: "https://github.com/byunn90/quizzer/raw/main/images/quizzGame.png",
    githubLink: "https://github.com/byunn90/quizzer",
    deployedLink: "https://byunn90.github.io/quizzer/",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.name} className="project">
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-links">
            <h3>{project.name}</h3>
            <p>
              <a href={project.githubLink}>GitHub</a> |{" "}
              <a href={project.deployedLink}>Deployed</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
