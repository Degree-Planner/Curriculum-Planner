import React from 'react';
import { Paper, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const EditDegreeStepperReview = ({degreeInformation, courseInformation}) => {
    const classes = useStyles();
    const degreeName = degreeInformation.DegreeName;
    console.log("Review Degree Information: ", degreeInformation);
    console.log("Review Degree Name: ", degreeInformation.DegreeName);
    console.log("Review Degree Description: ", degreeInformation.DegreeDescription);
    const degreeDescription = degreeInformation.DegreeDescription;
    console.log("Review Course Information: ", courseInformation);
    console.log("Review Dept Code: ", courseInformation[0].DepartmentCode);
    console.log("Review Course Number: ", courseInformation[0].CourseNumber);

    const term1Courses = () =>{
        console.log("Scanning Term1");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 1");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term === 1){
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
            if (courseInformation[i].Term === 2){
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
            if (courseInformation[i].Term === 3){
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
            if (courseInformation[i].Term === 4){
                console.log("Found Term 4");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term5Courses = () =>{
        console.log("Scanning Term5");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 5");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term === 5){
                console.log("Found Term 5");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term6Courses = () =>{
        console.log("Scanning Term6");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 6");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term === 6){
                console.log("Found Term 6");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term7Courses = () =>{
        console.log("Scanning Term7");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 7");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term === 7){
                console.log("Found Term 7");
                temp.push(courseInformation[i]);
            }
        }
        return temp;
    }
    const term8Courses = () =>{
        console.log("Scanning Term8");
        var temp = [];
        for(var i=0; i<courseInformation.length; i++){
            console.log("Iterating 8");
            console.log(courseInformation[i].Term);
            if (courseInformation[i].Term === 8){
                console.log("Found Term 8");
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
                        <Typography className={classes.subheading} variant="h6" align="left">Term 5: </Typography>
            {term5Courses().map((courseInformation) => (
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
                        <Typography className={classes.subheading} variant="h6" align="left">Term 6: </Typography>
            {term6Courses().map((courseInformation) => (
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
                        <Typography className={classes.subheading} variant="h6" align="left">Term 7: </Typography>
            {term7Courses().map((courseInformation) => (
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
                        <Typography className={classes.subheading} variant="h6" align="left">Term 8: </Typography>
            {term8Courses().map((courseInformation) => (
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
                          <Typography className={classes.details} variant="body7">Prerequisites: {courseInformation.PreReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
                  <AccordionDetails className={classes.details}>
                      <div>
                          <Typography className={classes.details} variant="body8">Corequisites: {courseInformation.CoReqs.join(",")}</Typography>
                      </div>
                  </AccordionDetails>
              </Accordion>
            </Container>
            ))}
            <br></br>
        </Paper>
    )
}

export default EditDegreeStepperReview;