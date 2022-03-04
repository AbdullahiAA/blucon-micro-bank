import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./NextOfKin.css";

function NextOfKin() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="nextOfKin">
      <AccountHeader />

      <AccountBody
        formTitle="Next of Kin"
        formDescr="Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit."
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row-2">
            <FormGroup>
              <FormLabel title="Title" htmlFor="Title" />

              <input type="text" id="Title" placeholder="Mr/Mrs/Miss" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Full Name (Surname First)" htmlFor="name" />

              <input type="text" id="name" placeholder="Surname First" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Gender" htmlFor="gender" />

              <select id="gender">
                <option value="" selected hidden disabled>
                  Choose gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </FormGroup>

            <FormGroup>
              <FormLabel title="Phone Number" htmlFor="phone" />

              <input type="tel" id="phone" placeholder="+234879357890" />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Next of Kin Address" htmlFor="addr" />

              <input type="text" id="addr" placeholder="Next of Kin Address" />
            </FormGroup>
          </div>

          <div className="formBtns">
            <Link to={routeParams.employerInfo}>
              <button className="btnReverse">Previous</button>
            </Link>

            <Link to={routeParams.otherInfo}>
              <button>Continue</button>
            </Link>
          </div>
        </form>
      </AccountBody>
    </div>
  );
}

export default NextOfKin;
