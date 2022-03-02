import React from "react";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="callToAction">
      <h2>Lorem Ipsum Dolor Sit Amet, Consectetur </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa amet
        id neque in ultrices vitae. Accumsan, tincidunt.
      </p>

      <div className="callToAction__btn">
        <button>Download Our App</button>

        <Link to={routeParams.newAccount}>
          <button className="btnReverse">Open Free Account</button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
