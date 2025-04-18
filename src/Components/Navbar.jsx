import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";
import "../Styles/navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar-container">
      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars className="hamburger-icon" />
      </button>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleSidebar}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/projects" onClick={toggleSidebar}>
          <FaProjectDiagram className="icon" /> Projects
        </Link>
        <Link to="/resume" onClick={toggleSidebar}>
          <FaFileAlt className="icon" /> Resume
        </Link>
        <Link to="/contact" onClick={toggleSidebar}>
          <FaEnvelope className="icon" /> Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
