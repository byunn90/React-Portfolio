import React from "react";
import "../../styles/Projects.css";
import pwa from "../../images/PwaTexteditor.png";
const projects = [
  {
    name: "Tech-Blog",
    image:
      "https://github.com/byunn90/Tech-Blog-MVC/raw/main/Assets/blogposts.png",
    githubLink: "https://github.com/byunn90/Tech-Blog-MVC",
    deployedLink: "https://shrouded-taiga-72180.herokuapp.com/",
  },
  {
    name: "Quizz Game",
    image: "https://github.com/byunn90/quizzer/raw/main/images/quizzGame.png",
    githubLink: "https://github.com/byunn90/quizzer",
    deployedLink: "https://byunn90.github.io/quizzer/",
  },
  {
    name: "Pwa-text-editor",
    image: pwa,
    githubLink: "https://github.com/byunn90/Scribbler-PWA",
    deployedLink: "https://mighty-taiga-72298.herokuapp.com/",
  },

  {
    name: "Database-Seeder",
    image:
      "https://github.com/byunn90/Dev-Database-Seeder-Express-Sequelize/raw/main/Assets/Screenshot%20(58).png",
    Code: "https://github.com/byunn90/Dev-Database-Seeder-Express-Sequelize",
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
