import React from 'react';
import {Stepper, Step, Button, Typography, StepLabel} from '@material-ui/core';
import AddDegree from '../AddDegree/AddDegree';
import Form from '../Form/Form';
import AddDegreeStepperReview from './AddDegreeStepperReview/AddDegreeStepperReview';
import useStyles from './styles';


function getSteps() {
  return ['Add Degree Info', 'Add Course Info', 'Review'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddDegree></AddDegree>;
    case 1:
      return <Form></Form>;
    case 2:
      return <AddDegreeStepperReview></AddDegreeStepperReview>;
    default:
      return 'Error: Unknown step';
  }
}

export default function AddDegreeStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Your new Degree Plan was added</Typography>
            <Button onClick={handleReset} className={classes.button}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
