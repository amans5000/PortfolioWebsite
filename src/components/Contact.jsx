import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import profile from "../data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
      `${formData.message}
      
Regards,
${formData.name}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-success fw-semibold fs-5">Contact</p>

        <h2 className="display-5 fw-bold text-white mb-5">
          Let's Work Together
        </h2>
      </motion.div>

      <div className="row g-5">
        {/* Left */}

        <div className="col-lg-5">
          <div className="contact-card">
            <h3 className="text-white mb-4">Get in Touch</h3>

            <p className="text-secondary mb-5">
              I'm always interested in discussing Software Engineering, Full
              Stack Development, internships, and exciting opportunities.
            </p>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h6>Email</h6>
                <p>{profile.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h6>Phone</h6>
                <p>{profile.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h6>Location</h6>
                <p>{profile.location}</p>
              </div>
            </div>

            <div className="d-flex gap-3 mt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="col-lg-7">
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control contact-input"
                    required
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="form-control contact-input"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-control contact-input"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  rows="7"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="form-control contact-input"
                  required
                />
              </div>

              <button type="submit" className="btn btn-success px-5 py-3">
                <FaPaperPlane className="me-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
