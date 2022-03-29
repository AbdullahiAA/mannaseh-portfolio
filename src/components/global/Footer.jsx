import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <div className="footer__mainLeft">
          <h3>Manasseh.E</h3>

          <div className="footer__socials">
            <a href="https://twitter.com">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="instagram" />
            </a>

            <a href="https://linkedin.com">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>

        <div className="footer__mainNav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mentorship">Mentorship</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="#">Crypto nuggets</NavLink>
            </li>
            <li>
              <NavLink to="/investments">Investments</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; Copyright 2022 • Manasseh Egedegbe.</p>
      </div>
    </footer>
  );
}

export default Footer;
