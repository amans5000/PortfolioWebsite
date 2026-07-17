import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaUsers,
  FaTrophy,
  FaUniversity,
} from "react-icons/fa";

import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <p className="text-success fw-semibold fs-5">About Me</p>

        <h2 className="display-5 fw-bold text-white mb-4">
          Passionate Software Developer &
          <span className="text-success"> Competitive Programmer</span>
        </h2>

        {/* Description */}

        <p
          className="text-secondary"
          style={{
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          I'm <strong className="text-white">{profile.name}</strong>, a
          third-year Computer Science Engineering student at
          <strong className="text-success">
            {" "}
            National Institute of Technology Durgapur
          </strong>
          . I enjoy solving complex algorithmic problems and developing scalable
          full-stack applications using React, Django, Node.js and PostgreSQL.
          My interests include Software Engineering, System Design, Competitive
          Programming, Artificial Intelligence and Backend Development.
        </p>

        {/* Cards */}

        <div className="row mt-5 g-4">
          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaGraduationCap size={35} className="text-success mb-3" />

              <h4 className="text-white">Education</h4>

              <p className="text-secondary mb-1">B.Tech Computer Science</p>

              <p className="text-secondary mb-1">NIT Durgapur</p>

              <p className="text-success fw-bold">CGPA : 8.98</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaLaptopCode size={35} className="text-success mb-3" />

              <h4 className="text-white">Experience</h4>

              <p className="text-secondary">Summer Intern</p>

              <p className="text-secondary">TCS Research & Innovation</p>

              <p className="text-success">2026</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaCode size={35} className="text-success mb-3" />

              <h4 className="text-white">Coding</h4>

              <p className="text-secondary">780+ Problems Solved</p>

              <p className="text-secondary">CodeChef ★★★</p>

              <p className="text-secondary">Codeforces 1121</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaUsers size={35} className="text-success mb-3" />

              <h4 className="text-white">Leadership</h4>

              <p className="text-secondary">Operation Head</p>

              <p className="text-secondary">ISTE NIT Durgapur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaTrophy size={35} className="text-success mb-3" />

              <h4 className="text-white">Achievements</h4>

              <p className="text-secondary">AIR 11005</p>

              <p className="text-secondary">JEE Advanced</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="about-card">
              <FaUniversity size={35} className="text-success mb-3" />

              <h4 className="text-white">Interests</h4>

              <p className="text-secondary">Software Engineering</p>

              <p className="text-secondary">AI & Backend Systems</p>

              <p className="text-secondary">Competitive Programming</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
