import React from "react";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";
import "./AccountType.css";

function AccountType() {
  return (
    <div className="accountType">
      <div className="accountType__item">
        <h5>Current Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button>Select Account</button>
        </Link>
      </div>
      <div className="accountType__item">
        <h5>Corporate Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button className="btnReverse">Select Account</button>
        </Link>
      </div>
      <div className="accountType__item">
        <h5>Salary Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button className="btnReverse">Select Account</button>
        </Link>
      </div>
      <div className="accountType__item">
        <h5>Savings Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button className="btnReverse">Select Account</button>
        </Link>
      </div>
      <div className="accountType__item">
        <h5>Bullet Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button className="btnReverse">Select Account</button>
        </Link>
      </div>
      <div className="accountType__item">
        <h5>Children Education Account</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit.
          Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl
          gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis.
          velit
        </p>
        <Link to={routeParams.bankInfo}>
          <button className="btnReverse">Select Account</button>
        </Link>
      </div>
    </div>
  );
}

export default AccountType;
