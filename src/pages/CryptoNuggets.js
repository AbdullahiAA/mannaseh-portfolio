import React from "react";
import "./CryptoNuggets.css";
import crypto from "../images/heroImg.jpg";

function CryptoNuggets() {
  return (
    <section className="cryptoNuggets">
      <div className="cryptoNuggets__content">
        <h2>Crypto nugget</h2>

        <p>
          During my free time, I am a Crypto expert. I believe that crypto is
          the way of the future and the world needs to catch up with changing
          times.
        </p>

        <button>Follow my crypto gems</button>
      </div>

      <div className="cryptoNuggets__img">
        <img src={crypto} alt="" />
      </div>
    </section>
  );
}

export default CryptoNuggets;
