import { Link } from "react-router-dom";
import projectsData from "../data/Projectsdata";


import "../Styles/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="project-link">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;