import React from "react";
import ContactHero from "../components/contact/ContactHero";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import "./Contact";

function Contact() {
  return (
    <div className="contact">
      <Header />

      <ContactHero />

      <Footer />
    </div>
  );
}

export default Contact;
