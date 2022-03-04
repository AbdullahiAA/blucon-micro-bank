import React from "react";
import "./HomeHero.css";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";
import Zoom from "react-reveal/Zoom";

function HomeHero() {
  return (
    <section className="homeHero">
      <div className="homeHero__content">
        <Zoom>
          <h1>
            Lorem <span>ipsum dolor</span> sit amet, consectetur adipiscing
            elit.
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa
            amet id neque in ultrices vitae. Accumsan, tincidunt morbi risus
            donec eu tincidunt a.
          </p>

          <div className="homeHero__callToAction">
            <button>Download Our App</button>

            <Link to={routeParams.newAccount}>
              <button className="btnReverse">Open Free Account</button>
            </Link>
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default HomeHero;
