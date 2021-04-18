import React, {useState} from 'react';
import {Stepper, Step, Button, Typography, StepLabel} from '@material-ui/core';
import AddDegree from '../AddDegree/AddDegree';
import Form from '../Form/Form';
import AddDegreeStepperReview from './AddDegreeStepperReview/AddDegreeStepperReview';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createDegree } from '../../actions/degrees';

import { Accordion, AccordionSummary, Container, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



//var savedDegreeData;
//var savedCourseData = [];


export default function AddDegreeStepper({degreeInfo}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ['Add Degree Info', 'Add Course Info', 'Review'];
  var numCourseAdded = 0;
  //var savedDegreeData;
  var [savedCourseData, setCourseData] = useState([]);
  var temp=[];
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
        return <Form courseInformation={courseInformation} updateCourseInfo={updateCourseInfo}></Form>;
      case 2:
        return <AddDegreeStepperReview degreeInformation={JSON.parse(localStorage.getItem('degrees'))} courseInformation={JSON.parse(localStorage.getItem('courses'))}></AddDegreeStepperReview>;
      default:
        return 'Error: Unknown step';
    }
  }

  const handleNext = () => {
    console.log("Number of Courses (Next): ", numCourseAdded);
    if(activeStep == 0 && (JSON.parse(localStorage.getItem('degrees')).DegreeName == "" || JSON.parse(localStorage.getItem('degrees')).DegreeDescription == "")){
      console.log("Please enter a degree name and description to continue");
    }
    else if(activeStep == 1 && savedCourseData.length < 1){
      console.log("Please add at least one course to continue");
    }
    else{
      if(activeStep==2){
        console.log("Sending info to DB");
        /*var sendToDegree=[];
        sendToDegree.push(JSON.parse(localStorage.getItem('degrees')));
        var courseToSend = JSON.parse(localStorage.getItem('courses'));
        sendToDegree.push(courseToSend);
        console.log("Info sent to DB: ", sendToDegree);
        dispatch(sendToDegree);*/
        
        var sendToDegree=JSON.parse(localStorage.getItem('degrees'));
        sendToDegree.Courses= JSON.parse(localStorage.getItem('courses'));
        console.log("Info sent to DB: ", sendToDegree);
        dispatch(createDegree(sendToDegree));
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const updateCourseInfo = () => {
    //setActiveStep(1);
    console.log("Trying to update");
  }

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
      var current;
      console.log("Initial Pull", localStorage.getItem('courses'));
      temp.push(courseData);
      if(localStorage.getItem('courses') != null){
        //savedCourseData.push(localStorage.getItem('courses'));
        //localStorage.clear();
        console.log("This is temp before push: ", temp);
        current = JSON.parse(localStorage.getItem('courses'));
        console.log("This is current before push: ", current);
        for(var i = 0; i< current.length; i++){
          temp.push(current[i]);
        }
        console.log("This is temp after push: ", temp);

        //localStorage.removeItem('courses');
      }
      
      localStorage.setItem('courses', JSON.stringify(temp));
      //savedCourseData.push(localStorage.getItem('courses'));
      setCourseData(JSON.parse(localStorage.getItem('courses')));
      
      console.log("CoursesAfter: ", localStorage.getItem('courses'));
      console.log("Array", savedCourseData);
      numCourseAdded++;
      console.log("Number of Courses: ", numCourseAdded);
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
    localStorage.removeItem('courses');
    localStorage.removeItem('degrees');
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
              <Typography className={classes.addedTitle}>Currently Added Courses</Typography>
            </center>
            {savedCourseData.map((savedCourseData) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{savedCourseData.DepartmentCode} {savedCourseData.CourseNumber} {savedCourseData.CourseTitle}</Typography>
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
