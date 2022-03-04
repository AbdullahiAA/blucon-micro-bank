import React from "react";
import "./OurHistory.css";
import historyImg from "../../images/historyImg.png";
import Slide from "react-reveal/Slide";

function OurHistory() {
  return (
    <section className="ourHistory">
      <div className="ourHistory__img">
        <img src={historyImg} alt="Our History" />
      </div>

      <div className="ourHistory__content">
        <Slide left>
          <h2>Our History</h2>
        </Slide>

        <Slide top>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi
            vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus
            consectetur tortor, nisl. Dui praesent elit quis ut aliquet. Turpis
            porta tincidunt ut dictumst tortor ut justo, amet, mi. Velit vel
            fusce neque, diam risus, nibh amet. Quam sagittis lacinia eget urna
            nisl. Ut nulla orci vel egestas vestibulum cursus massa id.
          </p>
        </Slide>

        <Slide right>
          <button className="btnReverse">Learn More</button>
        </Slide>
      </div>
    </section>
  );
}

export default OurHistory;
