import React, { useEffect, useState } from "react";
import Card, { CardContent } from "../components/global/Card";
import "./Experience.css";

function Experience() {
  const [showOtherContent, setShowOtherContent] = useState(false);

  useEffect(() => {
    if (showOtherContent === false) {
      window.scrollTo(0, 0);
    }
  }, [showOtherContent]);

  return (
    <Card className={`experience  ${showOtherContent ? "show" : ""}`}>
      <CardContent className="experience__content">
        <h2>Personal Experience</h2>

        <p>
          Up until 2009, I was a medical doctor before switching to investment
          management.
        </p>

        <div className={`otherContent ${showOtherContent ? "show" : ""}`}>
          <p>----------</p>

          <p>
            I am a CFA Charterholder with an MBA from London Business School. I
            have also received Executive Education training in Massachusetts
            Institute of Technology, Oxford University, HEC Paris, Stanford
            Graduate School of Business and Berkeley Haas School of Business.
          </p>

          <p>
            Until 2019, I was the Chief Investment Officer at Premium Pension
            Limited, the third largest Pension Fund Administrator in Nigeria
            with AUM of $2 billion. I was able to generate the best investment
            returns in the Nigerian pension industry, raising the unit value of
            the retirement fund from number four to number one. Before that, I
            was the Senior Portfolio Manager at FCMB Asset Management in Lagos.
          </p>

          <p>
            In 2013, I founded Emperia Fronteira Limited, a venture capital
            firm. Emperia Fronteira Limited has investments in Nigeria and
            abroad. These investments are in different industries including
            fintech, healthcare, insuretech, consumer goods, renewable energy,
            and AI.
          </p>

          <p>
            In 2017, I founded Kudy Financials Sarl, a Luxembourg registered
            hedge fund manager. I am currently scaling this firm.
          </p>
        </div>

        <span
          className="cardButton"
          onClick={() => setShowOtherContent((prevState) => !prevState)}
        >
          Read {showOtherContent ? "less" : "more"}
        </span>
      </CardContent>

      <div className="experience__img"></div>
    </Card>
  );
}

export default Experience;
