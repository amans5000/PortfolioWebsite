import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

import profile from "../data/profile";
import achievements from "../data/achievements";

export default function Hero() {
  return (
    <section id="home" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Greeting */}

        {/* <p className="text-success fs-5 fw-semibold mb-3">Hello</p> */}

        {/* Heading */}

        <h1
          className="fw-bold text-white"
          style={{
            fontSize: "clamp(2.8rem,6vw,5rem)",
            lineHeight: "1.1",
          }}
        >
          I'm {profile.name},
        </h1>

        {/* Animated Text */}

        <div
          className="fw-bold mt-2"
          style={{
            color: "#69F0AE",
            fontSize: "clamp(2rem,5vw,4rem)",
          }}
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1500,
              "Full Stack Developer",
              1500,
              "Competitive Programmer",
              1500,
              "React Developer",
              1500,
              "Backend Developer",
              1500,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </div>

        {/* College */}

        <h2
          className="text-white mt-3"
          style={{
            fontSize: "clamp(1.6rem,3vw,3rem)",
          }}
        >
          Based in NIT Durgapur, India.
        </h2>

        {/* Description */}

        <p
          className="text-secondary mt-4"
          style={{
            maxWidth: "850px",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          I am a final-year Computer Science student at NIT Durgapur passionate
          about Software Engineering, Full Stack Development, Competitive
          Programming and scalable backend systems. I enjoy building impactful
          products using React, Django, Node.js and PostgreSQL while
          continuously solving algorithmic problems to strengthen my
          problem-solving skills.
        </p>

        {/* Buttons */}

        <div className="d-flex flex-wrap gap-3 mt-5">
          <a
            href="/resume.pdf"
            download
            className="btn btn-success px-4 py-3 rounded-4"
          >
            <FaDownload className="me-2" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn btn-outline-light px-4 py-3 rounded-4"
          >
            <FaPaperPlane className="me-2" />
            Contact Me
          </a>
        </div>

        {/* Achievement Cards */}

        <div className="row mt-5 gy-4">
          {achievements.map((item) => (
            <div className="col-lg-2 col-md-4 col-6" key={item.title}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="hero-stat-card p-4 rounded-4 h-100"
              >
                <h2 className="fw-bold text-success">{item.number}</h2>

                <p className="text-secondary mb-0">{item.title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
