import React from "react";
import Card, { CardButton, CardContent } from "../components/global/Card";
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

        <CardButton href="https://twitter.com/knightofdelta?s=21">
          Follow my crypto gems
        </CardButton>
      </CardContent>

      <div className="cryptoNuggets__img"></div>
    </Card>
  );
}

export default CryptoNuggets;
