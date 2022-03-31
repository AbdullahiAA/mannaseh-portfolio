import React from "react";
import { CardButton } from "../components/global/Card";
import "./Mentorship.css";

function Mentorship() {
  return (
    <section className="mentorship">
      <div className="mentorship__content">
        <h2>Mentorship</h2>

        <p>
          From 2015-2019, I held my mentorship class called Personal Finance
          Masterclass. The mentorship had an average of 300-600 applicants with
          24-40 people, post-screening. By 2025,I hope to have trained over 500
          people between the ages of 18- 24.
        </p>

        <CardButton href="https://medium.com/@knightofdelta/testimonials-on-previous-masterclasses-b20ee6f918d0">
          Read what students are saying about the training
        </CardButton>
      </div>

      <div className="mentorship__browser">
        <div className="mentorship__browserBar">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="mentorship__browserBody"></div>
      </div>
    </section>
  );
}

export default Mentorship;
