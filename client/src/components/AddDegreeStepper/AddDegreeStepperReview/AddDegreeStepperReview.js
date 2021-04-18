import React, {useState, useEffect} from 'react';
import { Paper, Grow, Typography, Container, Accordion, AccordionSummary, AccordionDetails, ThemeProvider} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const AddDegreeStepperReview = ({degreeInformation, courseInformation}) => {
    const classes = useStyles();
    const degreeName = degreeInformation.DegreeName;
    console.log("Review Degree Information: ", degreeInformation);
    console.log("Review Degree Name: ", degreeInformation.DegreeName);
    console.log("Review Degree Description: ", degreeInformation.DegreeDescription);
    const degreeDescription = degreeInformation.DegreeDescription;
    const courses = "courseInformation";
    console.log("Review Course Information: ", courseInformation);
    console.log("Review Dept Code: ", courseInformation[0].DepartmentCode);
    console.log("Review Course Number: ", courseInformation[0].CourseNumber);

    const term1Courses = () =>{
        console.log("Scanning Term1");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 1");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term == 1 || courseInformation[i].Term == "1" || courseInformation[i].Term == '1'){
                console.log("Found Term 1");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term2Courses = () =>{
        console.log("Scanning Term2");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 2");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term == 2 || courseInformation[i].Term == "2" || courseInformation[i].Term == '2'){
                console.log("Found Term 2");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term3Courses = () =>{
        console.log("Scanning Term3");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 3");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term == 3 || courseInformation[i].Term == "3" || courseInformation[i].Term == '3'){
                console.log("Found Term 3");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term4Courses = () =>{
        console.log("Scanning Term4");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 4");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term == 4 || courseInformation[i].Term == "4" || courseInformation[i].Term == '4'){
                console.log("Found Term 4");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }

    
    
    return (
        <Paper>
            <br></br>
            <Typography className={classes.heading} variant="h6" align="left">Degree: </Typography>
            <Typography className={classes.subheading} variant="h6" align="left">Degree Name: {degreeName}</Typography>
            <Typography className={classes.subheading} variant="h6" align="left">Degree Description: {degreeDescription} </Typography>

            <Typography className={classes.heading} variant="h6" align="left">Courses: </Typography>

            <Typography className={classes.subheading} variant="h6" align="left">Term 1: </Typography>
            {term1Courses().map((courseInformation) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{courseInformation.CourseID} {courseInformation.CourseTitle}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body4">{courseInformation.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body5">Minimum Grade: {courseInformation.MinimumGrade.toUpperCase()}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body6">Credit Hours: {courseInformation.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}

            <Typography className={classes.subheading} variant="h6" align="left">Term 2: </Typography>
            {term2Courses().map((courseInformation) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{courseInformation.CourseID} {courseInformation.CourseTitle}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body4">{courseInformation.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body5">Minimum Grade: {courseInformation.MinimumGrade.toUpperCase()}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body6">Credit Hours: {courseInformation.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}

            <Typography className={classes.subheading} variant="h6" align="left">Term 3: </Typography>
            {term3Courses().map((courseInformation) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{courseInformation.CourseID} {courseInformation.CourseTitle}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body4">{courseInformation.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body5">Minimum Grade: {courseInformation.MinimumGrade.toUpperCase()}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body6">Credit Hours: {courseInformation.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}

            <Typography className={classes.subheading} variant="h6" align="left">Term 4: </Typography>
            {term4Courses().map((courseInformation) => (
            <Container maxWidth="sm" className={classes.container}>
              <Accordion className={classes.card}>
                  <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}>
                      <div>
                          <Typography className={classes.title} variant="body1">{courseInformation.CourseID} {courseInformation.CourseTitle}</Typography>
                      </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body4">{courseInformation.CourseDescription}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body5">Minimum Grade: {courseInformation.MinimumGrade.toUpperCase()}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body6">Credit Hours: {courseInformation.CreditHours}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
            <br></br>
        </Paper>
    )
}

export default AddDegreeStepperReview;