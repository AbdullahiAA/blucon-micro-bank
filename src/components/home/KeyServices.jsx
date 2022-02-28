import React from 'react'
import "./KeyServices.css"
import contrIcon from "../../images/icons/contribution.svg"
import bankIcon from "../../images/icons/bank.svg"
import creditIcon from "../../images/icons/credit.svg"
import epuipIcon from "../../images/icons/equipment.svg"
import farmIcon from "../../images/icons/farm.svg"
import financeIcon from "../../images/icons/finance.svg"

function KeyServices() {
  return (
    <section className='keyServices'>
        <div className="keyServices__header">
            <h2>Our Key Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida Lorem</p>
        </div>

        <div className="keyServices__list">
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={contrIcon} alt="Daily Thrift Contribution" />
                </div>
                <h5 className="keyServices__listTitle">Daily Thrift Contribution</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={bankIcon} alt="Bank Account" />
                </div>
                <h5 className="keyServices__listTitle">Bank Account</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={creditIcon} alt="Credit Facilities" />
                </div>
                <h5 className="keyServices__listTitle">Credit Facilities</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={epuipIcon} alt="Equipment Microleasing" />
                </div>
                <h5 className="keyServices__listTitle">Equipment Microleasing</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={farmIcon} alt="Farm Input Loan" />
                </div>
                <h5 className="keyServices__listTitle">Farm Input Loan</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
            <div className="keyServices__listItem">
                <div className="keyServices__listIcon">
                    <img src={financeIcon} alt="Tricycle Finance" />
                </div>
                <h5 className="keyServices__listTitle">Tricycle Finance</h5>
                <p className="keyServices__listContent">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nibh nisi vel nullam lacus, velit. Mattis massa odio nisl gravida in phasellus consectetur tortor, nisl. </p>
            </div>
        </div>

        <div className="keyServices__exploreBtn">
            <button>Explore Our Services</button>
        </div>
    </section>
  )
}

export default KeyServices