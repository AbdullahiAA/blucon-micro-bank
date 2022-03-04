import React from "react";
import "./OpenAccountHero.css";
import Zoom from "react-reveal/Zoom";

function OpenAccountHero() {
  return (
    <div className="openAccountHero">
      <div className="openAccountHero__content">
        <Zoom>
          <h2>Select Account Type</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi
            vel nullam lacus, velit. Mattis massa odio nisl gravida
          </p>
        </Zoom>
      </div>
    </div>
  );
}

export default OpenAccountHero;
