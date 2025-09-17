import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 2,
      name: "Soul Food Caterers - Brooklyn Location",
      description: "Brooklyn Location for the Soul Food Catering Business",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://fdsdigital.github.io/BrooklynSoulFoodCaterers/",
      repo: "https://github.com/fdsdigital/BrooklynSoulFoodCaterers/"
    },
    {
      id: 1,
      name: "Soul Food Caterers - Queens Location",
      description: "Restaurant Website for a Soul Food Catering Business in Queens, NY",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://fdsdigital.github.io/QueensLocationSoulFoodCaterers/",
      repo: "https://github.com/fdsdigital/QueensLocationSoulFoodCaterers"
    },
    {
      id: 3,
      name: "C&C Eatery - Jacksonville, FL",
      description: "Jacksonville, FL Restaurant Website",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://fdsdigital.github.io/C-CEateryWebsiteRevised/",
      repo: "https://github.com/fdsdigital/C-CEateryWebsiteRevised"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Here are some projects I've built. Click on the project name to see it live, or check out the code on GitHub.
        </p>
      </div>

      <ul className="projects-grid">
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <h2 className="project-title">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.name}
              </a>
            </h2>
            <p className="project-description">{project.description}</p>
            <div className="tech-used">
              <span className="tech-label">Technologies Used:</span>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-link">
              View Code on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
