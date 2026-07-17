import profile from "../data/profile";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLaptopCode,
} from "react-icons/fa";

import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

export default function Sidebar() {
  return (
    <aside
      className="bg-[#121212] rounded-4 p-4 shadow-lg border border-secondary position-sticky"
      style={{ top: "20px" }}
    >
      {/* Profile Image */}

      <div className="text-center">
        <img
          src="/profilephoto.png"
          alt={profile.name}
          className="img-fluid rounded-4 border border-secondary mb-4"
        />
      </div>

      {/* Available */}

      {/* <div className="text-center mb-4">
        <span className="badge rounded-pill bg-success px-3 py-2">
          ● Available for Internship
        </span>
      </div> */}

      {/* Name */}

      <div className="text-center">
        <h3 className="fw-bold text-white">{profile.name}</h3>

        <p className="text-success fw-semibold">{profile.subtitle}</p>
      </div>

      {/* Contact */}

      <div className="mt-4">
        <div className="d-flex align-items-center mb-3">
          <FaEnvelope className="text-success me-3" />

          <small className="text-light">{profile.email}</small>
        </div>

        <div className="d-flex align-items-center mb-3">
          <FaPhoneAlt className="text-success me-3" />

          <small className="text-light">{profile.phone}</small>
        </div>

        <div className="d-flex align-items-center mb-3">
          <FaMapMarkerAlt className="text-success me-3" />

          <small className="text-light">{profile.location}</small>
        </div>

        <div className="d-flex align-items-center">
          <FaLaptopCode className="text-success me-3" />

          <small className="text-light">CGPA {profile.cgpa}</small>
        </div>
      </div>

      <hr className="border-secondary my-4" />

      {/* Social */}

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaGithub size={22} />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href={profile.leetcode}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <SiLeetcode size={22} />
        </a>

        <a
          href={profile.codeforces}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <SiCodeforces size={22} />
        </a>

        <a
          href={profile.codechef}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <SiCodechef size={22} />
        </a>
      </div>

      {/* Buttons */}

      <div className="row mt-5 g-2">
        <div className="col-6">
          <a
            href="/resume.pdf"
            download
            className="btn btn-outline-light w-100 rounded-3"
          >
            <FaDownload className="me-2" />
            Resume
          </a>
        </div>

        <div className="col-6">
          <a href="#contact" className="btn btn-success w-100 rounded-3">
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
}
