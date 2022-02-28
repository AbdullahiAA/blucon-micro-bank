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
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
        secTitle="Our Vision"
        secContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna nisl. Ut nulla orci vel egestas vestibulum cursus massa id."
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
