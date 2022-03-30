import React from "react";
import Card, { CardButton, CardContent } from "../components/global/Card";
import "./Experience.css";

function Experience() {
  return (
    <Card className="experience">
      {/* <SectionHeader>
        <p>WORK EXPERIENCE</p>

        <h2>Companies I have worked for in the past.</h2>
      </SectionHeader>

      <ExperienceList /> */}
      <CardContent className="experience__content">
        <h2>Personal Experience</h2>

        <p>
          Up until 2009, I was a medical doctor before switching to investment
          management.
        </p>

        <CardButton href="#read-more">Read more</CardButton>
      </CardContent>

      <div className="experience__img"></div>
    </Card>
  );
}

export default Experience;
