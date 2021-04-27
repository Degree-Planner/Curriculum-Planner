import React, {useState} from 'react';
import {Stepper, Step, Button, Typography, StepLabel, Paper, Accordion, AccordionSummary, Container, AccordionDetails} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';
import Form from '../Form/Form';
import AddDegree from '../AddDegree/AddDegree';
import { createDegree } from '../../actions/degrees';
import AddDegreeStepperReview from './AddDegreeStepperReview/AddDegreeStepperReview';

export default function AddDegreeStepper({degreeInfo}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Add Degree Info', 'Add Course Info', 'Review'];
  var numCourseAdded = 0;
  var [savedCourseData, setCourseData] = useState([]);
  var temp=[];

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
    console.log("Number of Courses (Next): ", numCourseAdded);
    if(activeStep === 0 && (JSON.parse(localStorage.getItem('degrees')).DegreeName === "" || JSON.parse(localStorage.getItem('degrees')).DegreeDescription === "")){
    }
    else if(activeStep === 1 && savedCourseData.length < 1){
    }
    else{
      if(activeStep===2){   
        var sendToDegree=JSON.parse(localStorage.getItem('degrees'));
        sendToDegree.Courses= JSON.parse(localStorage.getItem('courses'));
        dispatch(createDegree(sendToDegree));
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const degreeInformation = (degreeData) =>{
    if(activeStep === 0){
    }
    localStorage.setItem('degrees', JSON.stringify(degreeData));
  }

  const courseInformation = (courseData) =>{
    if(activeStep === 1){
      var current;
      temp.push(courseData);
      if(localStorage.getItem('courses') != null){
        current = JSON.parse(localStorage.getItem('courses'));
        for(var i = 0; i< current.length; i++){
          temp.push(current[i]);
        }
      }
      localStorage.setItem('courses', JSON.stringify(temp));
      setCourseData(JSON.parse(localStorage.getItem('courses')));
      numCourseAdded++;
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
    localStorage.removeItem('courses');
    localStorage.removeItem('degrees');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({pathname: `/csc530/dev/degrees`})
}

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
            <Paper className={classes.finishPaper}>
              <Typography className={classes.finish} align='center'>Your new Degree Plan was successfully added</Typography>
              <Typography className={classes.message} align='center'>Click the Reset button at the bottom left to create another degree or click the View All Plans button to navigate to the list of plans</Typography>
              <center>
                <Button variant="contained" size="large" color="primary" onClick = {handleSubmit}>View All Plans</Button>
              </center>
            </Paper>
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
        {activeStep === 1 && savedCourseData.length > 0 ? (
          <div>
            <center>
              <Typography className={classes.addedTitle}>Currently Added Courses</Typography>
            </center>
            {savedCourseData.map((savedCourseData) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{savedCourseData.CourseID} {savedCourseData.CourseTitle}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Course Description: {savedCourseData.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Minimum Grade: {savedCourseData.MinimumGrade}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Credit Hours: {savedCourseData.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Prerequisites: {savedCourseData.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Corequisites: {savedCourseData.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Term: {savedCourseData.Term}</Typography>
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
