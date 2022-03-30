import React from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../../images/menuIcon.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header__logo">
        <h3>
          <NavLink to="/">Manasseh.E</NavLink>
        </h3>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/investments">Investments</NavLink>
          </li>
          <li>
            <NavLink to="/cryto-nuggets">Crypto nuggets</NavLink>
          </li>
          <li>
            <NavLink to="/mentorship">Mentorship</NavLink>
          </li>
        </ul>
      </nav>

      <img className="menuIcon" src={menuIcon} alt="Menu" />

      <div className="header__bg"></div>
    </header>
  );
}

export default Header;
