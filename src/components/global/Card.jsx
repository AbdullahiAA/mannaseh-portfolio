import React from "react";
import "./Card.css";

function Card({ children, className }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function CardContent({ children }) {
  return <div className="cardContent">{children}</div>;
}

export default Card;
export { CardContent };
