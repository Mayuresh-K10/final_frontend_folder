import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StepOne from "./step1/Step1";
import StepTwo from "./step2/Step2";
import StepThree from "./step3/Step3";
import StepFour from "./step4/Step4";
import StepFive from "./step5/Step5";
import StepSix from "./step6/Step6";
import { actions } from "../../appStore/regSlice";
import { useDispatch, useSelector } from "react-redux";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [isStepValid, setIsStepValid] = useState(false);
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  // Redux states
  const reduxStep1 = useSelector((state) => state.register.step1);
  const reduxStep2 = useSelector((state) => state.register.step2);
  const reduxStep4 = useSelector((state) => state.register.step4);
  const reduxStep6 = useSelector((state) => state.register.step6)

  useEffect(() => {
    validateStep();
  }, [activeStep, reduxStep1, reduxStep2, reduxStep4,reduxStep6]);

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const validateStep = () => {
    switch (activeStep) {
      case 0:
        setIsStepValid(validateStep1());
        break;
      case 1:
        setIsStepValid(validateStep2());
        break;
      case 2:
        setIsStepValid(validateStep3());
        break;
      case 4: 
        setIsStepValid(validateStep5());
        break;
      default:
        setIsStepValid(true);
    }
  };

  const validateStep1 = () => {
    return (
      reduxStep1.college_name &&
      reduxStep1.courseName &&
      reduxStep1.yourName &&
      reduxStep1.collegeEmail &&
      reduxStep1.phoneNumber &&
      reduxStep1.gender &&
      reduxStep1.linkedin &&
      reduxStep1.courseFees &&
      reduxStep1.selectedYear
    );
  };

  const validateStep2 = () => {
    return reduxStep2.userInfo && reduxStep2.userInfo.trim().length <= 200;
  };

  const validateStep3 = () => {
    return reduxStep4.userInfo && reduxStep4.userInfo.trim().length <= 200;
  };

  const validateStep5 = () =>{
    const isValid = reduxStep6.agree;
  return isValid;
  }
  

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleComplete = () => {
    const newCompleted = { ...completed, [activeStep]: true };
    setCompleted(newCompleted);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (allStepsCompleted()) {
      handleReset();
    } else {
      handleNext();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    dispatch(actions.resetAllSteps());
  };

  const renderFormForStep = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      case 4:
        return <StepFive onValidationChange={validateStep5}  />;
      case 5:
        return <StepSix />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: "1rem",
        "@media(max-width:800px)": { marginLeft: "-1rem", p: 0, m: 0, overflow: "hidden" },
      }}
      ref={containerRef}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Box sx={{ mt: 2, mb: 1 }}>{renderFormForStep(activeStep)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                disabled={!isStepValid}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: "inline-block" }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} disabled={!isStepValid}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Steps;
