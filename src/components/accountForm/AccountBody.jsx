import React from "react";
import "./AccountBody.css";
import FormContainer from "./FormContainer";
import FormStepper from "./FormStepper";

function AccountBody({ formTitle, formDescr, children }) {
  return (
    <div className="accountBody">
      <FormStepper />

      <FormContainer formTitle={formTitle} formDescr={formDescr}>
        {children}
      </FormContainer>
    </div>
  );
}

export default AccountBody;
