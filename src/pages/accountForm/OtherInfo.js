import React from "react";
import { Link } from "react-router-dom";
import AccountBody from "../../components/accountForm/AccountBody";
import AccountHeader from "../../components/accountForm/AccountHeader";
import { FormGroup, FormLabel } from "../../components/global/FormWidgets";
import routeParams from "../../routeParams";
import "./OtherInfo.css";

function OtherInfo() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="otherInfo">
      <AccountHeader />

      <AccountBody
        formTitle="Other Information"
        formDescr="Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus, velit."
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row-2">
            <FormGroup>
              <FormLabel title="Your Name" htmlFor="name" />

              <input type="text" id="name" placeholder="John Doe" />
            </FormGroup>

            <FormGroup>
              <FormLabel title="Date" htmlFor="date" />

              <input type="date" id="date" placeholder="Date" />
            </FormGroup>
          </div>

          <div className="checkArea">
            <input type="checkbox" id="markIt" />

            <label htmlFor="markIt">
              Lorem ipsum dolor sit amet,consect et uadipisci ng elitlacus,
              velit. Lorem ipsum dolor sit amet, consect et Lorem ipsum dolor
              sit amet,consect et uadipisci ng elitlacus, velit. Lorem ipsum
              dolor sit amet.
            </label>
          </div>

          <div className="formBtns">
            <Link to={routeParams.nextOfKin}>
              <button className="btnReverse">Previous</button>
            </Link>

            <Link to={routeParams.homePage}>
              <button>Complete</button>
            </Link>
          </div>
        </form>
      </AccountBody>
    </div>
  );
}

export default OtherInfo;
