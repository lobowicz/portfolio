import React from 'react';
import projects from '../data/projects';       
import ProjectCard from '../components/ProjectCard';
import './Projects.css';                       

export default function Projects() {
  return (
    <main className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </main>
  );
}
