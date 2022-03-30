import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../../images/menuIcon.svg";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header__logo">
        <h3>
          <NavLink to="/">Manasseh.E</NavLink>
        </h3>
      </div>

      <nav className={`${open ? "show" : ""}`} onClick={() => setOpen(false)}>
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

      {open && (
        <div className="navOverlay" onClick={() => setOpen(false)}></div>
      )}

      {/* Menu Icon */}
      <img
        className="menuIcon"
        onClick={() => setOpen((prevState) => !prevState)}
        src={menuIcon}
        alt="Menu"
      />

      <div className="header__bg"></div>
    </header>
  );
}

export default Header;
