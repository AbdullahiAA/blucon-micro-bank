import React from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import CallToAction from "../components/home/CallToAction";
import HomeHero from "../components/home/HomeHero";
import KeyServices from "../components/home/KeyServices";
import OurBusiness from "../components/home/OurBusiness";
import OurCustomer from "../components/home/OurCustomer";
import OurHistory from "../components/home/OurHistory";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />

      <HomeHero />

      <KeyServices />

      <OurHistory />

      <OurCustomer />

      <OurBusiness />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default Home;
