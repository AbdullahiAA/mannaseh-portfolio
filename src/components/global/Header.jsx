import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header__logo">MANNASEH</div>

      <nav>
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
      </nav>
    </header>
  );
}

export default Header;
