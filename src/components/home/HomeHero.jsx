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
            We are <span>BLUCON Microfinance Bank.</span> But We would love to
            be called your bank.
          </h1>

          <p>
            Every goal in business is to do things better and serve better.
            Companies grow and thrive by finding ways to improve their
            operations, products, or services. We’re here to help you improve
            your business operations and your cash flow. We offer smarter and
            simpler business accounts, and solutions to give you better access
            to your funds and more ways to operate your business and save.
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
