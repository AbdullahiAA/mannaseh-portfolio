import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header__logo">MANNASEH</div>

      <nav>
        <ul>
          <li>
            <a href="#">Mentorship</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Crypto nuggets</a>
          </li>
          <li>
            <a href="#">Investments</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
