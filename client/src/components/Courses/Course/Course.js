import React from 'react';
import { Accordion, AccordionActions, AccordionSummary, Container, Button, Typography, AccordionDetails } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';

import useStyles from './styles';
    
const Course = ({ course, style }) => {
    const classes = useStyles();

    return (
        <Accordion square={true} className={style}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}>
                <div>
                    <Typography className={classes.title1} variant="body1">{course.CourseID}</Typography>
                </div>
                <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
                <div>
                    <Typography className={classes.credits} variant="body2">{course.CreditHours}</Typography>
                </div>
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
                    <Typography className={classes.details} variant="body2">Prerequisites: {course.PreReqs.map((course) => course + ' ')}</Typography>
                    <Typography className={classes.details} variant="body2">Corequisites: {course.CoReqs.map((course) => course + ' ')}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Course;