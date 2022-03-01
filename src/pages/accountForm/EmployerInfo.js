import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./EmployerInfo.css";

function EmployerInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="employerInfo">
      <AccountHeader />

      <AccountBody
        formTitle="Employer Information"
        formDescr="Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit."
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row-2">
            <FormGroup>
              <FormLabel title="Employer Title" htmlFor="employerTitle" />

              <input type="text" id="employerTitle" placeholder="Mr/Mrs/Miss" />
            </FormGroup>

            <FormGroup>
              <FormLabel
                title="Employer Full Name (Surname First) "
                htmlFor="name"
              />

              <input
                type="text"
                id="name"
                placeholder="Employer Full Name (Surname First)"
              />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Employer Address" htmlFor="addr" />

              <input type="text" id="addr" placeholder="Employer Address" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Employer Sector" htmlFor="employerSector" />

              <input
                type="text"
                id="employerSector"
                placeholder="+234879357890"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Employement Status" htmlFor="status" />

              <input type="text" id="status" placeholder="+234879357890" />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Commencement Date" htmlFor="commDate" />

              <input type="date" id="commDate" placeholder="+234879357890" />
            </FormGroup>
          </div>

          <div className="formBtns">
            <Link to={routeParams.personalInfo}>
              <button className="btnReverse">Previous</button>
            </Link>

            <Link to={routeParams.nextOfKin}>
              <button>Continue</button>
            </Link>
          </div>
        </form>
      </AccountBody>
    </div>
  );
}

export default EmployerInfo;
