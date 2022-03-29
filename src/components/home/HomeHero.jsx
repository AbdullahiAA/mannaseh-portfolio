import React from "react";
import "./HomeHero.css";

function HomeHero() {
  return (
    <section className="homeHero">
      <div className="homeHero__img"></div>

      <div className="homeHero__content">
        <h1>
          I'm Manasseh Egedegbe.
          <br />
          A CIO by day
          <br />
          <span>an investor by night.</span>
        </h1>

        <p>
          I am the Founder and Chief Investment Officer at Kudy Financials, and
          a crypto enthusiast who has been actively investing in crypto since
          2016.
        </p>
      </div>

      <div className="homeHero__bg"></div>
    </section>
  );
}

export default HomeHero;
