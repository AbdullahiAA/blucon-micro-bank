import React from 'react'
import "./OurBusiness.css"
import checkIconWhite from "../../images/icons/checkIconWhite.svg"
import businessImg from "../../images/businessImg.png"

function OurBusiness() {
  return (
    <section className='ourBusiness'>
        <div className="ourBusiness__content">
            <h2>Our Core Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida Lorem</p>

            <div className="ourBusiness__list">
                <ul>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Microsavings</span>
                    </li>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Microcredit</span>
                    </li>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Microinsurance</span>
                    </li>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Financial Literacy Service</span>
                    </li>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Entreprenuership Training</span>
                    </li>
                    <li>
                        <div className="ourBusiness__listCheck">
                            <img src={checkIconWhite} alt="Check" />
                        </div>
                        <span>Remittance of Cash Transfer</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="ourBusiness__img">
            <img src={businessImg} alt="Core Business" />
        </div>

        
    </section>
  )
}

export default OurBusiness