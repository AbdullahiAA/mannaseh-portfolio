import React from "react";
import Slide from "react-reveal/Slide";
import "./Home.css";

function Home() {
  return (
    <section className="homeHero">
      <Slide left>
        <div className="homeHero__img"></div>
      </Slide>

      <div className="homeHero__content">
        <Slide right>
          <h1>
            I'm Manasseh Egedegbe.
            <br />
            A CIO by day
            <br />
            <span>an investor by night.</span>
          </h1>
        </Slide>

        <Slide duration={1500} right>
          <p>
            I am the Founder and Chief Investment Officer at Kudy Financials,
            and a crypto enthusiast who has been actively investing in crypto
            since 2016.
          </p>
        </Slide>
      </div>

      <div className="homeHero__bg"></div>
    </section>
  );
}

export default Home;
