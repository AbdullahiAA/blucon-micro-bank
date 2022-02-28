import React from 'react'
import "./OurCustomer.css"
import checkIcon from "../../images/icons/checkIcon.svg"
import customerOne from "../../images/customerOne.png"
import customerTwo from "../../images/customerTwo.png"
import customerThree from "../../images/customerThree.png"

function OurCustomer() {
  return (
    <section className='ourCustomer'>
        <div className="ourCustomer__header">
            <h2>Our Customer Base</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida Lorem</p>
        </div>

        <div className="ourCustomer__content">
            <div className="ourCustomer__images">
                {/* TODO: Add the tooltip */}
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
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Micro-entreprenuers</span>
                    </li>
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Self-employed/Income Earners</span>
                    </li>
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Smallholder Farmers</span>
                    </li>
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Cooperatives</span>
                    </li>
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Artisan</span>
                    </li>
                    <li>
                        <div className="ourCustomer__listCheck">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <span>Organised groups & Association</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default OurCustomer