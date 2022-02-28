import React from "react";
import checkIcon from "../../images/icons/checkIcon.svg";
import coreOneImg from "../../images/coreOne.png";
import coreTwoImg from "../../images/coreTwo.png";
import coreThreeImg from "../../images/coreThree.png";
import "./CoreValue.css";

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
            <li>
              <div className="coreValue__listCheck">
                <img src={checkIcon} alt="Check" />
              </div>
              <span>Humility</span>
            </li>
            <li>
              <div className="coreValue__listCheck">
                <img src={checkIcon} alt="Check" />
              </div>
              <span>Ceativity</span>
            </li>
            <li>
              <div className="coreValue__listCheck">
                <img src={checkIcon} alt="Check" />
              </div>
              <span>Integrity</span>
            </li>
            <li>
              <div className="coreValue__listCheck">
                <img src={checkIcon} alt="Check" />
              </div>
              <span>Professionalism</span>
            </li>
            <li>
              <div className="coreValue__listCheck">
                <img src={checkIcon} alt="Check" />
              </div>
              <span>Resopnsiveness</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="coreValue__imgMiddle">
        <img src={coreOneImg} alt="Core Value" />
        <img src={coreTwoImg} alt="Core Value" />
      </div>
      <div className="coreValue__imgLast">
        <img src={coreThreeImg} alt="Core Value" />
      </div>
    </div>
  );
}

export default CoreValue;
