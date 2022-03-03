import React from "react";
import "./OurCustomer.css";
import checkIcon from "../../images/icons/checkIcon.svg";
import customerOne from "../../images/customerOne.png";
import customerTwo from "../../images/customerTwo.png";
import customerThree from "../../images/customerThree.png";

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
        <h2>Our Customer Base</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel
          nullam lacus, velit. Mattis massa odio nisl gravida Lorem
        </p>
      </div>

      <div className="ourCustomer__content">
        <div className="ourCustomer__images">
          <div className="ourCustomer__imageOne">
            <img src={customerOne} alt="Customer Img" />
          </div>
          <div className="ourCustomer__imageTwo">
            <img src={customerTwo} alt="Customer Img" />
          </div>
          <div className="ourCustomer__imageThree">
            <img src={customerThree} alt="Customer Img" />
          </div>
        </div>

        <div className="ourCustomer__list">
          <ul>
            {customerCategory.map((category) => (
              <li>
                <div className="ourCustomer__listCheck">
                  <img src={checkIcon} alt="Check" />
                </div>
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurCustomer;
