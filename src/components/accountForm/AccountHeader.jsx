import React from "react";
import "./AccountHeader.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";

function AccountHeader() {
  return (
    <div className="accountHeader">
      <div className="accountHeader__icon">
        <Link to={routeParams.homePage}>
          <img src={logo} alt="Blucon Microfinance Bank" />
        </Link>
      </div>
      <div className="accountHeader__info">
        <h3>Account Opening Form</h3>
        <p>
          Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit.
          Lorem ipsum dolor sit amet,consect et
        </p>
      </div>
    </div>
  );
}

export default AccountHeader;
