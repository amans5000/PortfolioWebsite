import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaComments,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

import projects from "../data/projects.js";

const projectIcons = {
  chat: <FaComments />,
  web: <FaLaptopCode />,
  server: <FaServer />,
};

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-success fw-semibold fs-5">Portfolio</p>

        <h2 className="display-5 fw-bold text-white mb-5">Projects</h2>
      </motion.div>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-lg-6 col-md-6" key={project.id}>
            <motion.div
              className="project-card h-100"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Header */}

              <div className="project-header">
                <div className="project-icon">
                  {projectIcons[project.icon] || <FaLaptopCode />}
                </div>

                {/* {project.featured && (
                  <span className="featured-badge">
                    <FaStar className="me-1" />
                    Featured
                  </span>
                )} */}
              </div>

              {/* Body */}

              <div className="project-body">
                <h3 className="fw-bold text-white mb-3">{project.title}</h3>

                <p className="text-secondary">{project.description}</p>

                {/* Tech Stack */}

                <div className="d-flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-4 d-flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      console.log(project);
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </button>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
