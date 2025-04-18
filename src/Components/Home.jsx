import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Styles/home.css";

const Home = () => {
  return (
    <motion.section 
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello, I'm <span className="highlight">Abhienaya Sri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A passionate developer creating amazing digital experiences.
          With a solid educational background in Computer Science and a passion for emerging technologies, a commitment to enhancing technical knowledge in AI, and full-stack development is demonstrated. Eager to contribute innovative ideas and technical skills to tech-driven teams, bringing a proactive approach and enthusiasm for learning. Past successes in collaborative and competitive environments underscore an ability to drive projects forward, making a meaningful impact in the field of technology.
        </motion.p>

        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link to="/projects" className="btn primary">View Projects</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
          <Link to="/resume" className="btn resume">View Resume</Link> {/* ✅ Added Resume Button */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;