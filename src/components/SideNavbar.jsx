import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faFileAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.css";

const SideNavbar = ({ images, currentIndex, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>

      {/* Sidebar */}
      <div className={`side-navbar ${isOpen ? "open" : ""}`}>
        <nav className="menu-items">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} /> About Me
          </Link>
          <Link to="/projects">
            <FontAwesomeIcon icon={faFolderOpen} /> Projects
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Message Me
          </Link>
          <Link to="/cv">
            <FontAwesomeIcon icon={faFileAlt} /> Curriculum Vitae
          </Link>
          <Link to="/social">
            <FontAwesomeIcon icon={faShareAlt} /> Social Media
          </Link>
        </nav>
      </div>

      {/* Progress Dots */}
      <div className="progress-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => onChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SideNavbar;
