import React from "react";
import "./KeyServices.css";
import contrIcon from "../../images/icons/contribution.svg";
import bankIcon from "../../images/icons/bank.svg";
import creditIcon from "../../images/icons/credit.svg";
import epuipIcon from "../../images/icons/equipment.svg";
import farmIcon from "../../images/icons/farm.svg";
import financeIcon from "../../images/icons/finance.svg";
import routeParams from "../../routeParams";
import { Link } from "react-router-dom";

const keyServices = [
  {
    id: 1,
    icon: contrIcon,
    title: "Daily Thrift Contribution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
  {
    id: 2,
    icon: bankIcon,
    title: "Bank Account",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
  {
    id: 3,
    icon: creditIcon,
    title: "Credit Facilities",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
  {
    id: 4,
    icon: epuipIcon,
    title: "Equipment Microleasing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
  {
    id: 5,
    icon: farmIcon,
    title: "Farm Input Loan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
  {
    id: 6,
    icon: financeIcon,
    title: "Tricycle Finance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl.",
  },
];

function KeyServices() {
  return (
    <section className="keyServices">
      <div className="keyServices__header">
        <h2>Our Key Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel
          nullam lacus, velit. Mattis massa odio nisl gravida Lorem
        </p>
      </div>

      <div className="keyServices__list">
        {keyServices.map(({ id, icon, title, content }) => (
          <div key={id} className="keyServices__listItem">
            <div className="keyServices__listIcon">
              <img src={icon} alt={title} />
            </div>
            <h5 className="keyServices__listTitle">{title}</h5>
            <p className="keyServices__listContent">{content}</p>
          </div>
        ))}
      </div>

      <div className="keyServices__exploreBtn">
        <Link to={routeParams.servicePage}>
          <button>Explore Our Services</button>
        </Link>
      </div>
    </section>
  );
}

export default KeyServices;
