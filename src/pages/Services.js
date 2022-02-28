import React from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import CallToAction from "../components/home/CallToAction";
import ServiceHero from "../components/services/ServiceHero";
import ServiceListing from "../components/services/ServiceListing";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <Header />

      <ServiceHero />

      <ServiceListing />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default Services;
