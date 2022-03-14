import React from "react";
import ServiceCard from "./ServiceCard";
import serviceThriftImg from "../../images/serviceThrift.png";
import serviceBankImg from "../../images/serviceBank.png";
import serviceCreditImg from "../../images/serviceCredit.png";
import serviceEquipImg from "../../images/serviceEquipment.png";
import serviceFarmImg from "../../images/serviceFarm.png";
import serviceTricycleImg from "../../images/serviceTricycle.png";
import serviceTechnicalImg from "../../images/serviceTechnical.png";
import serviceCustodyImg from "../../images/serviceCustody.png";
import "./ServiceListing.css";
import { Link } from "react-router-dom";
import routeParams from "../../routeParams";

function ServiceListing() {
  return (
    <div className="serviceListing">
      <ServiceCard imgURL={serviceThriftImg} showBgIllustration>
        <div className="serviceCard__content">
          <h2>Daily Thrift Contribution</h2>

          <div className="serviceCard__subSection">
            <h5>What do you stand to enjoy?</h5>
            <ul>
              <li>
                An opportunity to save for 30days and enjoy a loan facility two
                times your contribution for one month
              </li>
              <li>Enjoy a moderate interest rate</li>
              <li>
                <b>others????</b> (instant account activation, daily cash
                collection by staff at your location)
              </li>
            </ul>
          </div>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceBankImg} showImgFirst>
        <div className="serviceCard__content">
          <h2>Bank Account</h2>

          <p>
            We offer savings, current, fixed deposit and salary account options
            to support your business and lifestyle; each with distinct features
            and advantages. Our local business bankers or cash management
            specialists are always glad to talk about the best solutions to keep
            your funds secure and growing.
          </p>

          <div className="serviceCard__subSection">
            <h5>What’s in it for you?</h5>

            <ul>
              <li>
                Enjoy the advantage of competitive interest rates and the
                availability of your funds at any given time
              </li>
              <li>
                Simple account opening process with attractive interest rates
              </li>
              <li>Zero opening balance</li>
              <li>Free statement of account</li>
              <li>Zero maintenance charges</li>
              <li>SMS alert services</li>
            </ul>
          </div>

          <Link to={routeParams.newAccount}>
            <button>Open Account</button>
          </Link>
        </div>

        <div className="serviceCard__content">
          <h3>Current Account</h3>

          <p>
            Manage your business, execute your payments, and receive your
            salaries you’re your current account.
          </p>

          <div className="serviceCard__subSection">
            <h5>What to enjoy?</h5>

            <ul>
              <li>Funds Transfer to all commercial banks in Nigeria</li>
              <li>Internal transfers free of charge</li>
              <li>Encasement of cheques</li>
              <li>Standing order transfer payments</li>
              <li>Zero opening balance</li>
              <li>Free statement of account</li>
              <li>Zero maintenance charges</li>
              <li>SMS alert services</li>
            </ul>

            <Link to={routeParams.newAccount}>
              <button>Open Account</button>
            </Link>
          </div>
        </div>

        <div className="serviceCard__content">
          <h3>Fixed Deposit Account</h3>

          <p>
            Blucon Fixed Deposit account allows you to fix your money for a
            chosen period of time and gain Attractive interest rates.
          </p>

          <div className="serviceCard__subSection">
            <h5>Your Advantages?</h5>

            <ul>
              <li>Minimum amount of N0,0000??</li>
              <li>Competitive interest rates</li>
              <li>Maturity 0-000 days</li>
              <li>Flexible tenor</li>
              <li>Fixed interest rate throughout the tenor</li>
            </ul>

            <Link to={routeParams.newAccount}>
              <button>Open Account</button>
            </Link>
          </div>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceCreditImg} showFullCard>
        <div className="serviceCard__content">
          <h2>Credit Facilities</h2>

          <h5>SME</h5>

          <p>
            Blucon Microfinance Bank offers business owners of Small and Medium
            Size Enterprises the opportunity to access loan products in a quick,
            transparent, and efficient way.
          </p>

          <p>
            Loans currently range from N0000 to N00000.Maximum maturity is 000
            months. For larger loan size, please discuss with your account
            officer.
          </p>

          <ul>
            <li>No mandatory deposits/savings</li>
            <li>Flexible collateral arrangements</li>
            <li>Flexible documentation requirements</li>
            <li>No mandatory deposits/savings</li>
            <li>No Audited Financial statements required</li>
            <li>
              Upon submission of all required documents, loan disbursement is
              guaranteed within 0000 working days
            </li>
          </ul>
        </div>

        <div className="serviceCard__content">
          <h5>OVERDRAFT</h5>

          <p>
            You never need to be broke again. Take advantage of our revolving
            facility for salaried customers with 00 months tenor based on 00% of
            the net monthly salary
          </p>

          <div className="serviceCard__subSection">
            <h5>Benefits:</h5>

            <ul>
              <li>Flexible interest rates on the amount utilized</li>
              <li>
                Up to N00.00m overdraw from your account on a monthly basis
              </li>
              <li>Enjoy Zero maintenance service</li>
              <li>No minimum account opening balance</li>
            </ul>
          </div>

          <div className="serviceCard__subSection">
            <h5>Loan features</h5>

            <ul>
              <li>Easy access to funds</li>
              <li>
                Access our overdraft through a debit card or a check transaction
                on your current account
              </li>
              <li>Revolving Facility</li>
              <li>It is always available when you need it</li>
              <li>Convenience</li>
              <li>
                Overdraw cash from your salary account at the time you need it
                most to ease added pressure
              </li>
            </ul>
          </div>

          <div className="serviceCard__subSection">
            <h5>Who can apply for overdraft</h5>

            <ul>
              <li>
                You must have your salary account with Blucon Microfinance Bank
              </li>
              <li>You must have good credit history</li>
              <li>Your minimum salary must be N00000.00</li>
              <li>You must be above 00 years of age</li>
            </ul>
          </div>
        </div>

        <div className="serviceCard__content">
          <h5>PAYROLL ADVANCES</h5>

          <p>
            Get an opportunity to get up to 50% of your net monthly salary
            upfront. Available to staff of private companies and government
            agencies with active salary accounts domiciled in Blucon
            Microfinance Bank.
          </p>

          <div className="serviceCard__subSection">
            <h5>What’s in it for you?</h5>

            <ul>
              <li>Up to 50% of net monthly salary in advance</li>
              <li>Tenor of 30 days renewable monthly</li>
              <li>No collateral required</li>
              <li>
                Minimum salary of N25,000 for public sector and N50,000 for
                private sector employees
              </li>
              <li>Salary advance will be made available within 24 hours</li>
            </ul>
          </div>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceEquipImg} showImgFirst>
        <div className="serviceCard__content">
          <h2>Equipment Microleasing</h2>

          <h5>WHAT COULD YOUR BUSINESS DO WITH THE RIGHT TOOLS?</h5>

          <p>
            Grow and expand your business with equipment leasing, and hire
            purchase to individuals and SMEs. You might need an industrial-size
            refrigerator, or a concrete mixer, or a server system to keep
            computers up and running. Whatever you need to make your business
            succeed, we’re here to help you get it.
          </p>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceFarmImg}>
        <div className="serviceCard__content">
          <h2>Farm Input Loan</h2>

          <h5>
            THE PEOPLE WHO PUT FOOD ON KWARA STATE TABLE WILL ALWAYS HAVE A
            PLATE ON OURS
          </h5>

          <p>
            We are committed to supporting community members like you. That’s
            why we’ve cultivated a local team of agricultural lenders who are
            active in the same agricultural communities you are. With a
            customized solution for your situation, from land to livestock, you
            get the strength of a top banking organization, empowered by local
            decision making. We’ll customize your loan based on your revenue
            streams, whether once or twice per year, quarterly, or at maturity.
          </p>

          <p>
            So, you keep caring for the land. We’ll be right here caring for
            you.
          </p>

          <div className="serviceCard__subSection">
            <h5>LINE OF CREDIT</h5>

            <p>
              Use a line of credit to meet your seasonal operating capital
              needs, including:
            </p>

            <ul>
              <li>seed</li>
              <li>land rent</li>
              <li>chemicals/pesticides</li>
              <li>fertilizer</li>
              <li>livestock</li>
              <li>equipment</li>
              <li>buildings and other yield boosters</li>
            </ul>
          </div>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceTricycleImg} showImgFirst showFullCard>
        <div className="serviceCard__content">
          <h2>Tricycle Financing</h2>

          <h5>ARE YOU READY TO TAKE TO BE YOUR OWN ROAD-MAN?</h5>

          <p>
            We have a close partnership with selected tricycle dealers and
            tricycle owners/riders’ associations. We have been helping
            individuals and businesses finance new tricycles.
          </p>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceTechnicalImg}>
        <div className="serviceCard__content">
          <h2>Technical Support</h2>

          <p>
            Blucon provides an increasing number of technical trainings like
            financial literacy, market information, and local business
            development services among others to enable microenterprises and
            small holder framers manage their businesses in order to become
            self-sufficient and independent of external aid.
          </p>
        </div>
      </ServiceCard>

      <ServiceCard imgURL={serviceCustodyImg} showImgFirst>
        <div className="serviceCard__content">
          <h2>Safe Custody Services</h2>

          <h5>LOCK AND KEY IS STILL IN FASHION</h5>

          <p>
            If you have important documents – like a Will or Power of Attorney,
            house deeds, and bearer bonds – you don’t want to leave lying around
            the house, our Safe Custody envelopes let you store these documents
            safely and securely.
          </p>

          <p>
            If you have jewellery, precious metals and stones or other small
            valuables you want to store safely and securely, storing them in our
            safe custody box can help give you peace of mind
          </p>

          <div className="serviceCard__subSection">
            <h5>Accessing your items</h5>

            <ul>
              <li>
                You get unlimited free access to your items during the opening
                hours of the bank where we keep your sealed envelope, packet, or
                box for safe custody
              </li>
              <li>
                You will have an option to leave the key to your envelope or box
                with the bank for safe custody or keep it in your possession
              </li>
            </ul>
          </div>
        </div>
      </ServiceCard>
    </div>
  );
}

export default ServiceListing;
