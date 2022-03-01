import React from "react";
import "./FormContainer.css";

function FormContainer({ formTitle, formDescr, children }) {
  return (
    <div className="formContainer">
      <div className="formContainer__header">
        <h3>{formTitle}</h3>
        <p>{formDescr} </p>
      </div>
      <div className="formContainer__body">{children}</div>
    </div>
  );
}

export default FormContainer;
