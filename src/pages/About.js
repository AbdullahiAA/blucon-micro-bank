import React from "react";
import AboutHero from "../components/about/AboutHero";
import CoreValue from "../components/about/CoreValue";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import ServiceCard from "../components/services/ServiceCard";
import missionVisionImg from "../images/missionVision.png";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Header />

      <AboutHero />

      <ServiceCard
        title="Our Mission"
        content="To set new standard for excellence in value added microfinance and related services through innovative technology and highly skilled professional staff for customer convenience and satisfaction."
        secTitle="Our Vision"
        secContent="To emerge as a national benchmark for innovative and commercially viable microfinance solutions to the unbanked for their socio-economic empowerment."
        imgURL={missionVisionImg}
        showImgFirst
        showFullCard
      />

      <CoreValue />

      <Footer />
    </div>
  );
}

export default About;
