import React from "react";
import checkIcon from "../../images/icons/checkIcon.svg";
import coreOneImg from "../../images/coreOne.png";
import coreTwoImg from "../../images/coreTwo.png";
import coreThreeImg from "../../images/coreThree.png";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

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
        <Zoom>
          <h2>Our Core Value</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Nibh nisi
            vel nullam lacus, velit. Mattis massa odio nisl gravida Lorem
          </p>
        </Zoom>

        <div className="coreValue__list">
          <ul>
            <Slide left>
              {valueList.map((value) => (
                <li key={value}>
                  <div className="coreValue__listCheck">
                    <img src={checkIcon} alt="Check" />
                  </div>
                  <span>{value}</span>
                </li>
              ))}
            </Slide>
          </ul>
        </div>
      </div>

      <Zoom>
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
      </Zoom>
    </div>
  );
}

export default CoreValue;
