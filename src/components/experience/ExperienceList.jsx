import React from "react";
import "./ExperienceList.css";

function ExperienceList() {
  return (
    <div className="experienceList">
      <div className="experienceList__item">
        <span className="experienceList__itemNo">01</span>
        <h3>
          <span className="google">Google</span>, Interaction Designer
        </h3>
        <p>
          I currently am the lead designer on the interaction design team for
          Google Play.
        </p>
      </div>

      <div className="experienceList__item">
        <span className="experienceList__itemNo">02</span>
        <h3>
          <span className="facebook">Facebook</span>, Product Designer
        </h3>
        <p>
          I’ve worked on a wide variety of internal tools for facebook over the
          past 6 years.
        </p>
      </div>

      <div className="experienceList__item">
        <span className="experienceList__itemNo">03</span>
        <h3>
          <span className="dribbble">Dribbble</span>, Graphic Designer
        </h3>
        <p>
          I started my design career with Dribbble. I was incharge of creating
          illustrations for the platform.
        </p>
      </div>
    </div>
  );
}

export default ExperienceList;
