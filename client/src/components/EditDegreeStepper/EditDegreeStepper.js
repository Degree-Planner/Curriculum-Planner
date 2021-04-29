import React, {useState} from 'react';
import {Stepper, Step, Button, Typography, StepLabel, Paper, Grid} from '@material-ui/core';
import EditDegree from '../EditDegree/EditDegree';
import EditCourses from '../EditCourses/EditCourses';
import EditDegreeStepperReview from './EditDegreeStepperReview/EditDegreeStepperReview';
import useStyles from './styles';
import { updateDegree } from '../../actions/degrees';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Accordion, AccordionSummary, Container, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function EditDegreeStepper({degreeInfo}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Edit Degree Info', 'Edit Course Info', 'Review'];
  var numCourseAdded = 0;
  var [savedCourseData, setCourseData] = useState(JSON.parse(localStorage.getItem('courses')));
  var temp=[];
  var savedDegreeId;

  //console.log("DegreeInfo: ", localStorage.getItem('degrees'));
  //console.log("CourseInfo: ", JSON.parse(localStorage.getItem('degrees')).Courses);
  

  const getStepContent=(step)=> {
    switch (step) {
      case 0:
        return <EditDegree degreeInformation={degreeInformation} updateCourseInfo={updateCourseInfo} getDegreeId={getDegreeId}></EditDegree>;
      case 1:
        return <EditCourses courseInformation={courseInformation}></EditCourses>;
      case 2:
        return <EditDegreeStepperReview degreeInformation={JSON.parse(localStorage.getItem('degrees'))} courseInformation={JSON.parse(localStorage.getItem('courses'))}></EditDegreeStepperReview>;
      default:
        return 'Error: Unknown step';
    }
  }

  const handleNext = () => {
    console.log("Number of Courses (Next): ", numCourseAdded);
    if(activeStep === 0 && (JSON.parse(localStorage.getItem('degrees')).DegreeName === "" || JSON.parse(localStorage.getItem('degrees')).DegreeDescription === "")){
      console.log("Please enter a degree name and description to continue");
    }
    else if (activeStep === 0){
      setCourseData(JSON.parse(localStorage.getItem('courses')));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else if(activeStep === 1 && savedCourseData.length < 1){
      console.log("Please add at least one course to continue");
    }
    else{
      if(activeStep===2){
        console.log("Sending info to DB");
        
        var sendToDegree=JSON.parse(localStorage.getItem('degrees'));
        sendToDegree.Courses= JSON.parse(localStorage.getItem('courses'));
        //delete sendToDegree._id;
        console.log("Info sent to DB: ", sendToDegree);

        // sending data to db
        dispatch(updateDegree(savedDegreeId, sendToDegree));
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const updateCourseInfo = (courseInfo) => {
    //setActiveStep(1);
    console.log("Trying to update");
    localStorage.setItem('courses', JSON.stringify(courseInfo));
    console.log(localStorage.getItem('courses', JSON.stringify(courseInfo)));
  }

  const getDegreeId = (degreeId) => {
    savedDegreeId = degreeId;
    console.log("Degree ID: ", savedDegreeId);
  }

  const degreeInformation = (degreeData) =>{
    if(activeStep === 0){
      //savedDegreeData = degreeData;
      //localStorage.setItem('degrees', JSON.stringify(degreeData));
    }
    //console.log("DegreeBefore: ", savedDegreeData);

    //const orginalDegree = localStorage.getItem('degree');
    localStorage.setItem('degrees', JSON.stringify(degreeData));
    console.log("DegreeAfter: ", localStorage.getItem('degrees'));
  }

  const courseInformation = (courseData) =>{
    if(activeStep === 1){
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
    history.push({pathname: `/csc530/dev/admin/editdegree`})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({pathname: `/csc530/dev/degrees`})
}

  const handleDelete = (e, removal) => {
    e.preventDefault();
    //console.log(e.target.value());
    console.log(removal);
    console.log(e);
    temp = JSON.parse(localStorage.getItem('courses'));
    for(var i = 0; i < temp.length; i++){
      if(temp[i].CourseID === removal){
        console.log("Found Match");
        temp.splice(i,1);
        console.log(temp);
        //Need to set storage to new array
        setCourseData(temp);
        localStorage.setItem('courses', JSON.stringify(temp));

        //JSON.parse(localStorage.setItem('courses', temp));
        //console.log(JSON.parse(localStorage.getItem('courses')));
      }
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
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
              <Typography className={classes.message} align='center'>Click the Edit Another Degree button at the bottom left to edit another degree or click the View All Plans button to navigate to the list of plans</Typography>
              <center>
                <Button variant="contained" size="large" color="primary" onClick = {handleSubmit}>View All Plans</Button>
              </center>
            </Paper>
            <Button onClick={handleReset} className={classes.button}>Edit Another Degree</Button>
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
        {activeStep === 1 && JSON.parse(localStorage.getItem('courses')).length > 0 ? (
          <div>
            <center>
              <Typography className={classes.addedTitle}>Currently Added Courses</Typography>
            </center>
            {savedCourseData.map((savedCourseData) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <Button className={classes.edit} color="primary" variant="contained" onClick={handleEdit}>EDIT</Button>
                        </Grid>
                        <Grid item xs={2}>
                          <Button className={classes.delete} id={savedCourseData.CourseID} label={savedCourseData.CourseID} variant="contained" onClick={(e) => handleDelete(e,e.target.id)}>DELETE</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.title} variant="body1">{savedCourseData.CourseID} {savedCourseData.CourseTitle}</Typography>
                          </Grid>
                      </Grid>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body1">Course Description: {savedCourseData.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.text}>
                      <div>
                          <Typography className={classes.text} variant="body1">Minimum Grade: {savedCourseData.MinimumGrade}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.text}>
                      <div>
                          <Typography className={classes.text} variant="body1">Credit Hours: {savedCourseData.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.text}>
                      <div>
                          <Typography className={classes.text} variant="body1">Prerequisites: {savedCourseData.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.text}>
                      <div>
                          <Typography className={classes.text} variant="body1">Corequisites: {savedCourseData.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.text}>
                      <div>
                          <Typography className={classes.text} variant="body1">Term: {savedCourseData.Term}</Typography>
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
