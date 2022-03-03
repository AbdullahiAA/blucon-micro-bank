import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import routeParams from "../../routeParams";
import { Link, useLocation } from "react-router-dom";
import "./ProgressBar.css";

const steps = [
  { label: "Bank Account Validation", page: routeParams.bankInfo },
  { label: "Personal Information", page: routeParams.personalInfo },
  { label: "Employer Information", page: routeParams.employerInfo },
  { label: "Next of Kin", page: routeParams.nextOfKin },
  { label: "Other Information", page: routeParams.otherInfo },
];

function ProgressBar() {
  const { pathname } = useLocation();

  function getActiveStep() {
    switch (pathname) {
      case routeParams.bankInfo:
        return 1;
      case routeParams.personalInfo:
        return 2;
      case routeParams.employerInfo:
        return 3;
      case routeParams.nextOfKin:
        return 4;
      case routeParams.otherInfo:
        return 5;

      default:
        return 1;
    }
  }

  return (
    <Box className="progressBar">
      <Stepper activeStep={getActiveStep() - 1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <Link to={step.page}>
              <StepLabel className="stepLabel">{step.label}</StepLabel>
            </Link>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ProgressBar;
