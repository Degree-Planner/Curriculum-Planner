import React, {useState} from 'react';
import {Stepper, Step, Button, Typography, StepLabel} from '@material-ui/core';
import AddDegree from '../AddDegree/AddDegree';
import Form from '../Form/Form';
import AddDegreeStepperReview from './AddDegreeStepperReview/AddDegreeStepperReview';
import useStyles from './styles';

import { Accordion, AccordionSummary, Container, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



//var savedDegreeData;
//var savedCourseData = [];


export default function AddDegreeStepper({degreeInfo}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ['Add Degree Info', 'Add Course Info', 'Review'];
  var numCourseAdded = 0;
  //var savedDegreeData;
  var savedCourseData = [];
  var temp = [];
  //console.log("DegreeInfo",savedDegreeData);

  console.log("DegreeInfo: ", localStorage.getItem('degrees'));
  //console.log("DegreeName: ", JSON.parse(localStorage.getItem('degrees')).DegreeName);

  //console.log("CourseInfo: ", savedCourseData);
  //console.log("CoursesBefore: ", localStorage.getItem('courses'));

  const getStepContent=(step)=> {
    switch (step) {
      case 0:
        return <AddDegree degreeInformation={degreeInformation}></AddDegree>;
      case 1:
        return <Form courseInformation={courseInformation}></Form>;
      case 2:
        return <AddDegreeStepperReview degreeInformation={JSON.parse(localStorage.getItem('degrees'))} courseInformation={JSON.parse(localStorage.getItem('courses'))}></AddDegreeStepperReview>;
      default:
        return 'Error: Unknown step';
    }
  }

  const handleNext = () => {
    if(activeStep == 0 && (JSON.parse(localStorage.getItem('degrees')).DegreeName == "" || JSON.parse(localStorage.getItem('degrees')).DegreeDescription == "")){
      console.log("Please enter a degree name and description to continue");
    }
    else if(activeStep == 1 && numCourseAdded < 1){
      console.log("Please add at least one course to continue");
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const degreeInformation = (degreeData) =>{
    if(activeStep == 0){
      //savedDegreeData = degreeData;
      //localStorage.setItem('degrees', JSON.stringify(degreeData));
    }
    //console.log("DegreeBefore: ", savedDegreeData);

    //const orginalDegree = localStorage.getItem('degree');
    localStorage.setItem('degrees', JSON.stringify(degreeData));
    console.log("DegreeAfter: ", localStorage.getItem('degrees'));
  }

  const courseInformation = (courseData) =>{
    if(activeStep == 1){
      //var temp = [];
      console.log("Initial Pull", localStorage.getItem('courses'));
      //savedCourseData.push(localStorage.getItem('courses'));
      temp.push(courseData);
      //localStorage.clear();
      
      localStorage.setItem('courses', JSON.stringify(temp));
      //savedCourseData.push(localStorage.getItem('courses'));
      savedCourseData = localStorage.getItem('courses');
      
      console.log("CoursesAfter: ", localStorage.getItem('courses'));
      console.log("Array", savedCourseData);
      numCourseAdded++;
    }
    //console.log(savedCourseData);
  
    //setTimeout(()=>handleNext(), 1);
    //handleBack();
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log("Yes");
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
      <div>
        {activeStep == 1 && savedCourseData.length > 0 ? (
          <div>
            <center>
              <Typography className={classes.subheading}>Added Courses</Typography>
            </center>
            {savedCourseData.map((savedCourseData) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{savedCourseData.DepartmentCode}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body2">{savedCourseData.CourseNumber}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body3">{savedCourseData.CourseTitle}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body4">{savedCourseData.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body5">{savedCourseData.MinimumGrade}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body6">{savedCourseData.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body7">{savedCourseData.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">{savedCourseData.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body9">{savedCourseData.Term}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
          </div>
        ):(
          <div>
          </div>
        )}
      </div>
    </div>
  );
}
