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
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";

const keyServices = [
  {
    id: 1,
    icon: contrIcon,
    title: "Daily Thrift Contribution",
    content: "Save daily towards a project or an event and accessible anytime.",
  },
  {
    id: 2,
    icon: bankIcon,
    title: "Bank Account",
    content:
      "Operate smarter and simpler business accounts, and have unrestricted access to your funds at any time.",
  },
  {
    id: 3,
    icon: creditIcon,
    title: "Credit Facilities",
    content:
      "Have a safe space to clearly discuss your loan options with a reliable lending partner.",
  },
  {
    id: 4,
    icon: epuipIcon,
    title: "Equipment Microleasing",
    content: "Get your hands on the right tools to make your business succeed.",
  },
  {
    id: 5,
    icon: farmIcon,
    title: "Farm Input Loan",
    content:
      "From land to livestock, become empowered by a supportive lending partner and get a customized loan.",
  },
  {
    id: 6,
    icon: financeIcon,
    title: "Tricycle Finance",
    content:
      "Enjoy a close partnership with the Team at Blucon, and selected tricycle dealers/owners.",
  },
];

function KeyServices() {
  return (
    <section className="keyServices">
      <div className="keyServices__header">
        <Fade bottom cascade>
          <h2>Our Key Services</h2>
          <p>
            Your goals become our goals the minute you walk into our bank or
            dial our number. We offer a range of convenient services to support
            your business, your customers, and even your shareholders. Let’s
            simplify your business operations together
          </p>
        </Fade>
      </div>

      <div className="keyServices__list">
        {keyServices.map(({ id, icon, title, content }) => (
          <Slide key={id} bottom>
            <div className="keyServices__listItem">
              <Roll top>
                <div className="keyServices__listIcon">
                  <img src={icon} alt={title} />
                </div>
              </Roll>
              <Slide left>
                <h5 className="keyServices__listTitle">{title}</h5>
              </Slide>
              <Slide top>
                <p className="keyServices__listContent">{content}</p>
              </Slide>
            </div>
          </Slide>
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
