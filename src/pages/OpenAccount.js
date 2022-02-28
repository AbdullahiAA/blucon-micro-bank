import React from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import CallToAction from "../components/home/CallToAction";
import AccountType from "../components/openAccount/AccountType";
import OpenAccountHero from "../components/openAccount/OpenAccountHero";
import "./OpenAccount.css";

function OpenAccount() {
  return (
    <div className="openAccount">
      <Header />

      <OpenAccountHero />

      <AccountType />

      <CallToAction />

      <Footer />
    </div>
  );
}

export default OpenAccount;
