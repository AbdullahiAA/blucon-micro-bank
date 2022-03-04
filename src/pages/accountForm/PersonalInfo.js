import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./PersonalInfo.css";

function PersonalInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="personalInfo">
      <AccountHeader />

      <AccountBody
        formTitle="Your Personal Information"
        formDescr="Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit."
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row-2">
            <FormGroup>
              <FormLabel title="Title" htmlFor="title" />

              <input type="text" id="title" placeholder="Mr/Mrs/Miss" />
            </FormGroup>

            <FormGroup>
              <FormLabel
                title="Your Full Name (Surname First)"
                htmlFor="name"
              />

              <input type="text" id="name" placeholder="Surname First" />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Address" htmlFor="addr" />

              <input type="text" id="addr" placeholder="Address" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Telephone Number (Mobile)" htmlFor="mobile" />

              <input type="tel" id="mobile" placeholder="+234879357890" />
            </FormGroup>

            <FormGroup>
              <FormLabel
                title="Telephone Number (Home)"
                htmlFor="homePhoneNo"
              />

              <input type="year" id="homePhoneNo" placeholder="+234879357890" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Means of Identification" htmlFor="meansOfID" />

              <input
                type="text"
                id="meansOfID"
                placeholder="Means of Identification"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel title="ID Number" htmlFor="homePhoneNo" />

              <input type="text" id="homePhoneNo" placeholder="ID Number" />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Level of Education" htmlFor="educ" />

              <input type="text" id="educ" placeholder="B Sc." />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Nationality" htmlFor="nationality" />

              <input type="text" id="nationality" placeholder="Nigerian" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="State of Origin" htmlFor="state" />

              <input type="text" id="state" placeholder="Kwara State" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Local Government Area" htmlFor="lga" />

              <input type="text" id="lga" placeholder="Local Government Area" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Religion" htmlFor="religion" />

              <input type="text" id="religion" placeholder="Religion" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Occupation" htmlFor="occupation" />

              <input type="text" id="occupation" placeholder="Occupation" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Marital Status" htmlFor="maritalStatus" />

              <input
                type="text"
                id="maritalStatus"
                placeholder="Marital Status"
              />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel title="Spouse Title" htmlFor="spouseTitle" />

              <input type="text" id="spouseTitle" placeholder="Mr/Mrs/Miss" />
            </FormGroup>

            <FormGroup>
              <FormLabel
                title="Spouse Full Name (Surname First)"
                htmlFor="spouseName"
              />

              <input type="text" id="spouseName" placeholder="Surname First" />
            </FormGroup>
          </div>

          <div className="row-2">
            <FormGroup>
              <FormLabel
                title="Spouse Telephone Number (Mobile)"
                htmlFor="spouseMobile"
              />

              <input type="tel" id="spouseMobile" placeholder="+234879357890" />
            </FormGroup>

            <FormGroup>
              <FormLabel
                title="Spouse Telephone Number (Home)"
                htmlFor="spouseHomeNum"
              />

              <input
                type="tel"
                id="spouseHomeNum"
                placeholder="+234879357890"
              />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Spouse Address" htmlFor="spouseAddr" />

              <input type="text" id="spouseAddr" placeholder="Spouse Address" />
            </FormGroup>
          </div>

          <div className="row-1">
            <FormGroup>
              <FormLabel title="Residential Type" htmlFor="residentType" />

              <input
                type="text"
                id="residentType"
                placeholder="Residential Type"
              />
            </FormGroup>
          </div>

          <div className="formBtns">
            <Link to={routeParams.bankInfo}>
              <button className="btnReverse">Previous</button>
            </Link>

            <Link to={routeParams.employerInfo}>
              <button>Continue</button>
            </Link>
          </div>
        </form>
      </AccountBody>
    </div>
  );
}

export default PersonalInfo;
