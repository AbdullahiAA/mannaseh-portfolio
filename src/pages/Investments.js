import React from "react";
import "./Investments.css";

function Investments() {
  return (
    <section className="investments">
      <div className="investments__header">
        <h2>Investments</h2>

        <p>
          I invest specifically in Fintech and Medtech due to the availability
          and feasibility of the investments at that moment. I have made
          Credible investments including being the first to invest in Reliance
          HMO, a medtech firm. Before investing, I have 4 things I look out for{" "}
        </p>
      </div>

      <div className="investments__item">
        <span>SVG ICON</span>

        <h3>Uniqueness</h3>

        <p>
          The core of every investment thesis is based on the uniqueness of the
          business solution
        </p>
      </div>

      <div className="investments__item">
        <span>SVG ICON</span>

        <h3>Innovation</h3>

        <p>I look out for innovative solutions across diverse industries</p>
      </div>

      <div className="investments__item">
        <span>SVG ICON</span>

        <h3>Competitive Advantage</h3>

        <p>I look out for something around a blue ocean strategy</p>
      </div>

      <div className="investments__item">
        <span>SVG ICON</span>

        <h3>Imitations and Duplication</h3>

        <p>
          I avoid duplication of ideas; in layman terms, I don’t like copycats.
        </p>
      </div>
    </section>
  );
}

export default Investments;
