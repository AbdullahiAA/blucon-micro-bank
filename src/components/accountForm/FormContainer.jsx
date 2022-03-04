import React from "react";
import Zoom from "react-reveal/Zoom";
import "./FormContainer.css";

function FormContainer({ formTitle, formDescr, children }) {
  return (
    <div className="formContainer">
      <Zoom>
        <div className="formContainer__header">
          <h3>{formTitle}</h3>
          <p>{formDescr} </p>
        </div>
        <div className="formContainer__body">{children}</div>
      </Zoom>
    </div>
  );
}

export default FormContainer;
