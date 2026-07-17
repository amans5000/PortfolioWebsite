import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="navbar navbar-dark bg-dark d-lg-none sticky-top shadow-sm border-bottom border-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-success" href="/">
            Aman Chauhan
          </a>

          <button
            className="btn btn-outline-success"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="d-lg-none bg-dark border-bottom border-secondary">
          <div className="container py-3">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="d-block py-2 text-light text-decoration-none nav-link-custom"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Top Bar */}

      <div className="d-none d-lg-flex justify-content-end align-items-center py-3 px-4 border-bottom border-secondary bg-[#090909]">
        <div className="d-flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-50}
              className="text-decoration-none text-light fw-medium nav-link-custom"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
