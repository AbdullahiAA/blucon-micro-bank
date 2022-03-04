import React from "react";
import "./ServiceHero.css";
import Zoom from "react-reveal/Zoom";

function ServiceHero() {
  return (
    <div className="serviceHero">
      <div className="serviceHero__content">
        <Zoom>
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa
            amet id neque in ultrices vitae. Accumsan, tincidunt.
          </p>

          <button>Download Our App</button>
        </Zoom>
      </div>
    </div>
  );
}

export default ServiceHero;
