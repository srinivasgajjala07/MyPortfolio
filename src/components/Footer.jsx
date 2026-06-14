import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <section style={{ padding: '3%' }}>

        {/* Nav links — centered, always one line */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            <ul className="footer-nav-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* Social icons — centered */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="social-icons">
            <a href="https://github.com/srinivasgajjala07" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/srinivasgajjala77" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className='copyright'>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </div>

      </section>
    </div>
  );
}

export default Footer;