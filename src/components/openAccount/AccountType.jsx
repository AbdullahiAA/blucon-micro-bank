import React from "react";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";
import Flip from "react-reveal/Flip";
import "./AccountType.css";

const accountType = [
  {
    id: 1,
    type: "Current Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
  },
  {
    id: 2,
    type: "Corporate Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
    isBtnReverse: true,
  },
  {
    id: 3,
    type: "Salary Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
    isBtnReverse: true,
  },
  {
    id: 4,
    type: "Savings Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
    isBtnReverse: true,
  },
  {
    id: 5,
    type: "Bullet Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
    isBtnReverse: true,
  },
  {
    id: 6,
    type: "Children Education Account",
    descr:
      "Lorem ipsum dolor sit amet, consectetur phasellus adipiscing elit. Nibh nisi vel nullam lacus, velit velit tortor Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. Dui praesent elit quis. velit",
    isBtnReverse: true,
  },
];

function AccountType() {
  return (
    <div className="accountType">
      {accountType.map(({ id, type, descr, isBtnReverse }) => (
        <Flip right>
          <div key={id} className="accountType__item">
            <h5>{type}</h5>

            <p>{descr}</p>

            <Link to={routeParams.bankInfo}>
              <button className={isBtnReverse ? "btnReverse" : ""}>
                Select Account
              </button>
            </Link>
          </div>
        </Flip>
      ))}
    </div>
  );
}

export default AccountType;
