import React, {useState} from 'react';
import {Stepper, Step, Button, Typography, StepLabel, Paper, Grid, Popper, Grow, IconButton} from '@material-ui/core';
import EditDegree from '../EditDegree/EditDegree';
import EditCourses from '../EditCourses/EditCourses';
import EditDegreeStepperReview from './EditDegreeStepperReview/EditDegreeStepperReview';
import useStyles from './styles';
import { updateDegree } from '../../actions/degrees';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Accordion, AccordionSummary, Container, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';



export default function EditDegreeStepper({degreeInfo}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Edit Degree Info', 'Edit Course Info', 'Review'];
  var numCourseAdded = 0;
  var [savedCourseData, setCourseData] = useState(JSON.parse(localStorage.getItem('courses')));
  const [anchorEl, setAnchorEl] = React.useState(null);
  var temp=[];
  var savedDegreeId;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
    if(activeStep === 0 && (JSON.parse(localStorage.getItem('degrees')).DegreeName === "" || JSON.parse(localStorage.getItem('degrees')).DegreeDescription === "")){
    }
    else if (activeStep === 0){
      setCourseData(JSON.parse(localStorage.getItem('courses')));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else if(activeStep === 1 && savedCourseData.length < 1){
    }
    else{
      if(activeStep===2){
        var sendToDegree=JSON.parse(localStorage.getItem('degrees'));
        sendToDegree.Courses= JSON.parse(localStorage.getItem('courses'));
        dispatch(updateDegree(savedDegreeId, sendToDegree));
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const updateCourseInfo = (courseInfo) => {
    localStorage.setItem('courses', JSON.stringify(courseInfo));
  }

  const getDegreeId = (degreeId) => {
    savedDegreeId = degreeId;
  }

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
    history.push({pathname: `/csc530/dev/admin/editdegree`})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({pathname: `/csc530/dev/degrees`})
}

  const handleDelete = (e, removal) => {
    e.preventDefault();
    temp = JSON.parse(localStorage.getItem('courses'));
    for(var i = 0; i < temp.length; i++){
      if(temp[i]._id + temp[i].CourseID === removal){
        temp.splice(i,1);
        setCourseData(temp);
        localStorage.setItem('courses', JSON.stringify(temp));
      }
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
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
                          <Button className={classes.edit} id={savedCourseData._id + savedCourseData.CourseID} color="primary" variant="contained" onClick={(e) => handleEdit(e,e.target.id)}>EDIT</Button>
                        </Grid>
                        <Grid item xs={2}>
                          <Button className={classes.delete} id={savedCourseData._id + savedCourseData.CourseID} variant="contained" onClick={(e) => handleDelete(e,e.target.id)}>DELETE</Button>
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
              <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Grow in>
                    <Paper className={classes.paper}>
                    <IconButton onClick={handleClose} className={classes.closeicon}>
                            <CloseIcon/>
                        </IconButton>
                      <EditCourses></EditCourses>
                    </Paper>
                    </Grow>
                </Popper>
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
