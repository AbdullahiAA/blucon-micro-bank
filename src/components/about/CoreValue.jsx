import React from "react";
import checkIcon from "../../images/icons/checkIcon.svg";
import coreOneImg from "../../images/coreOne.png";
import coreTwoImg from "../../images/coreTwo.png";
import coreThreeImg from "../../images/coreThree.png";
import "./CoreValue.css";

const valueList = [
  "Humility",
  "Ceativity",
  "Integrity",
  "Professionalism",
  "Resopnsiveness",
];

function CoreValue() {
  return (
    <div className="coreValue">
      <div className="coreValue__content">
        <h2>Our Core Value</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit. Nibh nisi vel
          nullam lacus, velit. Mattis massa odio nisl gravida Lorem
        </p>

        <div className="coreValue__list">
          <ul>
            {valueList.map((value) => (
              <li key={value}>
                <div className="coreValue__listCheck">
                  <img src={checkIcon} alt="Check" />
                </div>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="coreValue__imgMiddle">
        <div className="imgMiddle__img">
          <img src={coreOneImg} alt="Core Value" />
        </div>

        <div className="imgMiddle__img">
          <img src={coreTwoImg} alt="Core Value" />
        </div>
      </div>

      <div className="coreValue__imgLast">
        <img src={coreThreeImg} alt="Core Value" />
      </div>
    </div>
  );
}

export default CoreValue;
