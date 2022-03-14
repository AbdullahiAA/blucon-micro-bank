import React from "react";
import ServiceCard from "../services/ServiceCard";
import missionVisionImg from "../../images/missionVision.png";
import "./MissionVision.css";

function MissionVision() {
  return (
    <ServiceCard
      className="missionVision"
      imgURL={missionVisionImg}
      showImgFirst
      showFullCard
    >
      <div className="serviceCard__content">
        <div>
          <h2>Our Mission</h2>

          <p>
            To set new standard for excellence in value added microfinance and
            related services through innovative technology and highly skilled
            professional staff for customer convenience and satisfaction.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>

          <p>
            To emerge as a national benchmark for innovative and commercially
            viable microfinance solutions to the unbanked for their
            socio-economic empowerment.
          </p>
        </div>
      </div>
    </ServiceCard>
  );
}

export default MissionVision;
