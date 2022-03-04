import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./BankInfo.css";

function YearList() {
  const currentYear = new Date().getFullYear();

  const yearList = [];

  for (let year = currentYear; year >= 1920; year--) {
    yearList.push(<option>{year}</option>);
  }

  return <>{yearList}</>;
}

function BankInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bankInfo">
      <AccountHeader />

      <AccountBody
        formTitle="Bank Account Validation"
        formDescr="Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit."
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row-2">
            <FormGroup>
              <FormLabel title="Account Number" htmlFor="accNum" />

              <input type="text" id="accNum" placeholder="Account Number" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Bank Verification Number" htmlFor="bvn" />

              <input
                type="text"
                id="bvn"
                placeholder="Bank Verification Number"
              />
            </FormGroup>
          </div>

          <div className="row-3">
            <FormGroup>
              <FormLabel title="Day of Birth" htmlFor="dob" />

              <select id="dob">
                <option value="" selected disabled hidden>
                  Choose day
                </option>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </FormGroup>

            <FormGroup>
              <FormLabel title="Month of Birth" htmlFor="mob" />

              <select id="mob">
                <option value="" selected disabled hidden>
                  Choose month
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </FormGroup>

            <FormGroup>
              <FormLabel title="Year of Birth" htmlFor="yob" />

              <select id="yob">
                <option value="" selected disabled hidden>
                  Choose year
                </option>
                <YearList />
              </select>
            </FormGroup>
          </div>

          <div className="formBtns">
            <Link to={routeParams.newAccount}>
              <button className="btnReverse">Go Back</button>
            </Link>

            <Link to={routeParams.personalInfo}>
              <button>Continue</button>
            </Link>
          </div>
        </form>
      </AccountBody>
    </div>
  );
}

export default BankInfo;
