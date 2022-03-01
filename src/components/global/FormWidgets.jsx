import React from "react";
import "./FormWidgets.css";

function FormGroup({ children }) {
  return <div className="formGroup">{children}</div>;
}

function FormLabel({ title, htmlFor }) {
  return (
    <label className="formLabel" for={htmlFor}>
      {title}
    </label>
  );
}

export { FormGroup, FormLabel };
