import React from "react";
import "./Card.css";

function Card({ children, className = "" }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function CardContent({ children }) {
  return <div className="cardContent">{children}</div>;
}

function CardButton({ href, className = "", disableTarget = false, children }) {
  return (
    <a
      href={href}
      target={disableTarget ? "" : "_blank"}
      rel="noreferrer"
      className={`cardButton ${className}`}
    >
      {children}
    </a>
  );
}

export default Card;
export { CardContent, CardButton };
