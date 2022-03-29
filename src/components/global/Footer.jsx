import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <div className="footer__mainLeft">
          <h3>MANNASEH</h3>
        </div>

        <div className="footer__mainNav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Mentorship</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="#">Crypto nuggets</NavLink>
            </li>
            <li>
              <NavLink to="#">Investments</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>No Copyright 2020 • Robin Williams.</p>
      </div>
    </footer>
  );
}

export default Footer;
