import React from "react";
import locationIcon from "../../images/icons/location.svg";
import emailIcon from "../../images/icons/email.svg";
import telIcon from "../../images/icons/tel.svg";
import contactImg from "../../images/contactImg.png";
import "./ContactHero.css";

function ContactHero() {
  return (
    <div className="contactHero">
      <div className="contactHero__header">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel
          nullam lacus, velit. Mattis massa odio nisl gravida
        </p>
      </div>

      <div className="contactHero__body">
        <ul className="contactHero__list">
          <li>
            <div className="coreValue__listIcon">
              <img src={locationIcon} alt="Location" />
            </div>
            <span>
              2118 Thornridge Cir. Syracuse, Connecticut 35624 - Lagos, Nigeria
            </span>
          </li>
          <li>
            <div className="coreValue__listIcon">
              <img src={emailIcon} alt="Email" />
            </div>
            <a href="mailto:support@bluconmfb.com">Support@bluconmfb.com</a>
          </li>
          <li>
            <div className="coreValue__listIcon">
              <img src={telIcon} alt="Phone No." />
            </div>
            <a href="tel:234803761435">+234-803-761-435</a>
          </li>
        </ul>

        <div className="contactHero__bodyImg">
          <img src={contactImg} alt="Contact" />
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
