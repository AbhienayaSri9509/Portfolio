import { useParams } from "react-router-dom";
import projectsData from "../data/Projectsdata";
import "../Styles/projectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }


  return (
    <section className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.longDescription}</p>
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-demo-link">
        View Project Demo
      </a>
    </section>
  );
};

export default ProjectDetail;