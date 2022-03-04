import React from "react";
import "./OurCustomer.css";
import checkIcon from "../../images/icons/checkIcon.svg";
import customerOne from "../../images/customerOne.png";
import customerTwo from "../../images/customerTwo.png";
import customerThree from "../../images/customerThree.png";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const customerCategory = [
  "Micro-entreprenuers",
  "Self-employed/Income Earners",
  "Smallholder Farmers",
  "Cooperatives",
  "Artisan",
  "Organised groups & Association",
];

function OurCustomer() {
  return (
    <section className="ourCustomer">
      <div className="ourCustomer__header">
        <Slide left>
          <h2>Our Customer Base</h2>
        </Slide>

        <Slide top>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi
            vel nullam lacus, velit. Mattis massa odio nisl gravida Lorem
          </p>
        </Slide>
      </div>

      <div className="ourCustomer__content">
        <div className="ourCustomer__images">
          <Zoom>
            <div className="ourCustomer__imageOne">
              <img src={customerOne} alt="Customer Img" />
            </div>
            <div className="ourCustomer__imageTwo">
              <img src={customerTwo} alt="Customer Img" />
            </div>
            <div className="ourCustomer__imageThree">
              <img src={customerThree} alt="Customer Img" />
            </div>
          </Zoom>
        </div>

        <div className="ourCustomer__list">
          <ul>
            <Zoom>
              {customerCategory.map((category) => (
                <li key={category}>
                  <div className="ourCustomer__listCheck">
                    <img src={checkIcon} alt="Check" />
                  </div>
                  <span>{category}</span>
                </li>
              ))}
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurCustomer;
