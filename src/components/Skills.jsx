import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import skills from "../data/skills";

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode />,
    data: skills.languages,
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    data: skills.frontend,
  },
  {
    title: "Backend",
    icon: <FaServer />,
    data: skills.backend,
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    data: skills.database,
  },
  {
    title: "Libraries",
    icon: <FaBrain />,
    data: skills.libraries,
  },
  {
    title: "Tools & Core CS",
    icon: <FaTools />,
    data: [...skills.core, ...skills.tools],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-success fw-semibold fs-5">Skills</p>

        <h2 className="display-5 fw-bold text-white mb-5">
          Technologies I Work With
        </h2>
      </motion.div>

      <div className="row g-4">
        {skillCategories.map((category, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
            >
              <div className="skill-icon">{category.icon}</div>

              <h4 className="text-white mt-3 mb-4">{category.title}</h4>

              <div className="d-flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
