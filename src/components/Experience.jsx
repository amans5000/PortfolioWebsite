import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-success fw-semibold fs-5">Experience</p>

        <h2 className="display-5 fw-bold text-white mb-5">My Journey</h2>
      </motion.div>

      {/* Timeline */}

      <div className="timeline">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <div className="d-flex align-items-center mb-3">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>

                <div className="ms-3">
                  <h4 className="text-white mb-1">{exp.role}</h4>

                  <h6 className="text-success mb-0">{exp.company}</h6>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-secondary mb-2">
                  <FaCalendarAlt className="me-2 text-success" />

                  {exp.duration}
                </p>

                <p className="text-secondary">
                  <FaMapMarkerAlt className="me-2 text-success" />

                  {exp.location}
                </p>
              </div>

              <ul className="timeline-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
