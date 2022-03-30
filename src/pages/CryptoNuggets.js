import React from "react";
import Card, { CardContent } from "../components/global/Card";
import "./CryptoNuggets.css";

function CryptoNuggets() {
  return (
    <Card className="cryptoNuggets">
      <CardContent className="cryptoNuggets__content">
        <h2>Crypto nugget</h2>

        <p>
          During my free time, I am a Crypto expert. I believe that crypto is
          the way of the future and the world needs to catch up with changing
          times.
        </p>

        <a
          href="https://twitter.com/knightofdelta?s=21"
          target="_blank"
          rel="noreferrer"
        >
          Follow my crypto gems
        </a>
      </CardContent>

      <div className="cryptoNuggets__img"></div>
    </Card>
  );
}

export default CryptoNuggets;
