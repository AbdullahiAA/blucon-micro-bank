import React from "react";
import "./AboutHero.css";
import Zoom from "react-reveal/Zoom";

function AboutHero() {
  return (
    <div className="aboutHero">
      <div className="aboutHero__content">
        <Zoom>
          <h2>About Blucon Microfinance Bank</h2>

          <p>
            Blucon is a microfinance bank licenced by the Central Bank of
            Nigeria (CBN) in 2008 as a fully-operational microfinance Bank. It
            has its head office in Ilorin, Kwara State.
          </p>

          <p>
            Blucon Microfinance Bank is committed to its passion of providing
            low cost financial services to low income individuals and
            enterprises across locals in Ilorin, Kwara state by availing them
            easy and convenient access to affordable loans.
          </p>
        </Zoom>
      </div>
    </div>
  );
}

export default AboutHero;
