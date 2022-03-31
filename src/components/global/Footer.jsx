import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <div className="footer__mainLeft">
          <h3>
            <Link to="/">Manasseh.E</Link>
          </h3>

          <div className="footer__socials">
            <a
              href="https://twitter.com/knightofdelta?s=21"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="twitter" />
            </a>

            <a
              href="https://www.linkedin.com/in/manasseh-egedegbe-cfa-61851310/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>

        <div className="footer__mainNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/investments">Investments</Link>
            </li>
            <li>
              <Link to="/cryto-nuggets">Crypto nuggets</Link>
            </li>
            <li>
              <Link to="/mentorship">Mentorship</Link>
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
