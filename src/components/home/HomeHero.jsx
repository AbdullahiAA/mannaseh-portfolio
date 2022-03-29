import React from "react";
import "./HomeHero.css";

function HomeHero() {
  return (
    <section className="homeHero">
      <div className="homeHero__img"></div>

      <div className="homeHero__content">
        <h1>
          I'm Robin Willaims.
          <br />
          A Product Designer
          <br />
          <span>based in Italy.</span>
        </h1>

        <p>
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>

      <div className="homeHero__bg"></div>
    </section>
  );
}

export default HomeHero;
