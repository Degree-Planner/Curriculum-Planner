import React from 'react';
import { Accordion, AccordionActions, AccordionSummary, Card, Button, Typography, AccordionDetails } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';
    

const Course = ({ course }) => {
    const classes = useStyles();
    return (
        <Accordion className={classes.card}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}>
                <div>
                    <Typography className={classes.title} variant="body1">{course.DepartmentCode} {course.CourseNumber}</Typography>
                </div>
                <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
                <Button color="primary" variant="contained">HI!</Button>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div>
                    <Typography className={classes.details} variant="body2">{course.CourseDescription}</Typography>
                </div>
                <div className={classes.details2}>
                    <Typography className={classes.details} variant="body2">Minimum Grade: {course.MinimumGrade}</Typography>
                    <Typography className={classes.details} variant="body2">Credit Hours: {course.CreditHours}</Typography>
                </div>
                <div className={classes.details2}>
                    <Typography className={classes.details} variant="body2">Prerequisites: {course.PreReqs}</Typography>
                    <Typography className={classes.details} variant="body2">Corequisites: {course.CoReqs}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Course;