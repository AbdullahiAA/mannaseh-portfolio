import React, { useEffect, useState } from "react";
import "./CompanySlider.css";
import img1 from "../../images/companies/buypower-logo.png";
import img2 from "../../images/companies/delphistem-icon.jpeg";
import img3 from "../../images/companies/kudi-logo.png";
import img4 from "../../images/companies/reliance-petroleum.svg";
import img5 from "../../images/companies/wella-health-logo.png";
import img6 from "../../images/companies/flux-factory-logo.png";

function CompanySlider() {
  const [left, setLeft] = useState("0px");

  useEffect(() => {
    function slideHor(e) {
      const cntWd = document.querySelector(".companySlider").clientWidth;
      const sldWd = document.querySelector(".thumbs").clientWidth;

      const leftPos = Math.ceil((cntWd - sldWd) * (e.pageX / cntWd));

      setLeft(() => leftPos + "px");
    }

    document.addEventListener("mousemove", slideHor);

    return () => {
      document.removeEventListener("mousemove", slideHor);
    };
  }, []);
  return (
    <section className="companySlider">
      <div className="thumbs" style={{ left: left }}>
        <div>
          <img src={img1} alt="Company" />
        </div>

        <div>
          <img src={img2} alt="Company" />
        </div>

        <div>
          <img src={img3} alt="Company" />
        </div>

        <div>
          <img src={img4} alt="Company" />
        </div>

        <div>
          <img src={img5} alt="Company" />
        </div>

        <div>
          <img src={img6} alt="Company" />
        </div>
      </div>
    </section>
  );
}

export default CompanySlider;
