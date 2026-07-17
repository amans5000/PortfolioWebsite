import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import profile from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left */}

          <div className="col-lg-6 text-center text-lg-start">
            <h3 className="fw-bold text-white mb-2">{profile.name}</h3>

            <p className="text-secondary mb-0">
              Full Stack Developer • Software Engineer
            </p>
          </div>

          {/* Right */}

          <div className="col-lg-6 text-center text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3 mb-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="text-secondary mb-0">
              © {year} {profile.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
