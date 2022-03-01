import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./BankAccount.css";

function BankAccount() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bankAccount">
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

              <input type="date" id="dob" placeholder="Day of Birth" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Month of Birth" htmlFor="mob" />

              <input type="month" id="mob" placeholder="Month of Birth" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Year of Birth" htmlFor="yob" />

              <input type="year" id="yob" placeholder="Year of Birth" />
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

export default BankAccount;
