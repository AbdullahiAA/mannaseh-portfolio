import React from "react";
import ExperienceList from "../components/experience/ExperienceList";
import SectionHeader from "../components/global/SectionHeader";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <SectionHeader>
        <p>WORK EXPERIENCE</p>

        <h2>Companies I have worked for in the past.</h2>
      </SectionHeader>

      <ExperienceList />
    </section>
  );
}

export default Experience;
