import "../Styles/resume.css";
import { motion } from "framer-motion";

const skills = ["C","C++",  "Web Development","AI", "SQL", "CSS", "UI/UX ", "Problem Solving"];

const projects = [
  { title: "To-Do App", description: "A simple task manager built using JavaScript with CRUD functionality." },
  { title: "Paginated Character Browser", description: "React app integrating API pagination to fetch and display characters." },
  { title: "Employee Management System", description: "A SQL-based system to manage employee records with relational database design." }
];

const certifications = [
  "Java Fundamentals - Oracle",
  "MS Excel - Coursera",
  "Web Development , Introduction to Machine Learning , Introduction to Internet Of Things  - Udemy",
  "Introduction to Computer Science - HarvardX ",
  "Prompting , AI , LLM - IBM Skills Build"
];

const achievements = [
  "IDEATHON 3.0 Winner - Sri Sai Ram Engineering College",
  "Won 'Best Paper Award' - 2024 in Sri Sai Ram Engineering College"
];

const Resume = () => {
  return (
    <motion.section 
      className="resume"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Resume</h2>

      {/* Summary Section */}
      <div className="resume-section">
        <h3>About Me</h3>
        <p>
          A passionate Computer Science graduate, eager to apply my knowledge and skills in web development. 
          Enjoy building user-friendly applications and constantly seek to improve my coding and problem-solving abilities.
        </p>
      </div>

      {/* Skills Section */}
      <div className="resume-section">
        <h3>Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              className="skill-tag"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="resume-section">
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="resume-section">
        <h3>Certifications</h3>
        <ul className="certification-list">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="resume-section">
        <h3>Achievements</h3>
        <ul className="achievement-list">
          {achievements.map((ach, index) => (
            <li key={index}>{ach}</li>
          ))}
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-section">
        <h3>Education</h3>
        <p><strong>Masters of Technology in Computer Science</strong> - SRI SAI RAM ENGINEERING COLLEGE</p>
        <p>Expected Graduation: 2027</p>
      </div>

      {/* Download Resume Button */}
      <div className="download-container">
        <a href="/resume.pdf" download className="resume-button">
          Download Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Resume;