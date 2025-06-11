import React from 'react';

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
    <section>
      <h1>My Projects</h1>
      <p>Here are some projects I’ve built. Click on the project name to see it live, or check out the code on GitHub.</p>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map(({ id, name, description, tech, url, repo }) => (
          <li key={id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '6px' }}>
            <h2 style={{ marginBottom: '0.25rem' }}>
              <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007acc' }}>
                {name}
              </a>
            </h2>
            <p>{description}</p>
            <p><strong>Tech used:</strong> {tech.join(', ')}</p>
            <a href={repo} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#555' }}>
              View Code on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
