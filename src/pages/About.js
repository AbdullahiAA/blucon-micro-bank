import React from "react";
import AboutHero from "../components/about/AboutHero";
import CoreValue from "../components/about/CoreValue";
import MissionVision from "../components/about/MissionVision";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Header />

      <AboutHero />

      <MissionVision />

      <CoreValue />

      <Footer />
    </div>
  );
}

export default About;
