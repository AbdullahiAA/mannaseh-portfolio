import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header__logo">
        <h3>Manasseh.E</h3>
      </div>

      <nav>
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
      </nav>

      <div className="header__bg"></div>
    </header>
  );
}

export default Header;
