import React, {useState, useEffect} from 'react';
import { Paper, Grow, Typography} from '@material-ui/core';

import useStyles from './styles';

const AddDegreeStepperReview = ({degreeInformation, courseInformation}) => {
    const classes = useStyles();
    const degreeName = degreeInformation.DegreeName;
    console.log("Review Degree Information: ", degreeInformation);
    console.log("Review Degree Name: ", degreeInformation.DegreeName);
    console.log("Review Degree Description: ", degreeInformation.DegreeDescription);
    const degreeDescription = degreeInformation.DegreeDescription;
    const courses = ['Placeholder'];
    console.log("Review Course Information: ", courseInformation);
    console.log("Review Dept Code: ", courseInformation[0].DepartmentCode);
    console.log("Review Course Number: ", courseInformation[0].CourseNumber);

    
    
    return (
        <Paper>
            <Typography className={classes.heading} variant="h6" align="left">Degree: </Typography>
            <Typography className={classes.subheading} variant="h6" align="left">Degree Name: {degreeName}</Typography>
            <Typography className={classes.subheading} variant="h6" align="left">Degree Description: {degreeDescription} </Typography>

            <Typography className={classes.heading} variant="h6" align="left">Courses: </Typography>

            <Typography className={classes.subheading} variant="h6" align="left">Term 1: </Typography>
            <Typography className={classes.info} variant="h6" align="left">{courses} </Typography>

            <Typography className={classes.subheading} variant="h6" align="left">Term 2: </Typography>
            <Typography className={classes.info} variant="h6" align="left">{courses} </Typography>

            <Typography className={classes.subheading} variant="h6" align="left">Term 3: </Typography>
            <Typography className={classes.info} variant="h6" align="left">{courses} </Typography>

            <Typography className={classes.subheading} variant="h6" align="left">Term 4: </Typography>
            <Typography className={classes.info} variant="h6" align="left">{courses} </Typography>
        </Paper>
    )
}

export default AddDegreeStepperReview;