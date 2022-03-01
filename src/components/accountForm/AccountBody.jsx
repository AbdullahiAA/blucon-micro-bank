import React from "react";
import "./AccountBody.css";
import FormContainer from "./FormContainer";
import ProgressBar from "./ProgressBar";

function AccountBody({ formTitle, formDescr, children }) {
  return (
    <div className="accountBody">
      <ProgressBar />

      <FormContainer formTitle={formTitle} formDescr={formDescr}>
        {children}
      </FormContainer>
    </div>
  );
}

export default AccountBody;
