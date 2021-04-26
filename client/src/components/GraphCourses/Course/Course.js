import React from 'react';
import { Fade, Popper, AccordionSummary, Container, Box, Typography, IconButton, Paper, Grow, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import Xarrow from "react-xarrows";

import useStyles from './styles';
import Courses from '../../Courses/Courses';
    
const Course = ({ course, style, hovered, currentCourse, related, onMouseEnter, onMouseLeave }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Paper square={true} className={classes.grid}>
            {hovered ? currentCourse.CourseID === course.CourseID ? course.PreReqs.map((preReq) => (
                    <Xarrow start={preReq} end={course.CourseID} strokeWidth={2} color={"Grey"} passProps= {{pointerEvents: "none"}}/>)):
                    related ? course.PreReqs.map((preReq) => (
                        <Xarrow start={preReq} end={course.CourseID} strokeWidth={2} color={"Grey"} passProps= {{pointerEvents: "none"}}/>)): <></>:
                    <></>
            }
            {hovered ? currentCourse.CourseID === course.CourseID ? course.CoReqs.map((preReq) => (
                    <Xarrow start={preReq} end={course.CourseID} dashness={true} strokeWidth={2} color={"Grey"} passProps= {{pointerEvents: "none"}}/>)):
                    related ? course.CoReqs.map((preReq) => (
                        <Xarrow start={preReq} end={course.CourseID} dashness={true} strokeWidth={2} color={"Grey"} passProps= {{pointerEvents: "none"}}/>)): <></>:
                    <></>
            }
            <Avatar onClick={handleClick} id={course.CourseID} className={style} onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                {course.CreditHours}
            </Avatar>
            <Typography className={classes.id} variant="body1" onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>{course.CourseID}</Typography>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Grow in>
                    <Paper className={classes.paper}>
                        <IconButton onClick={handleClose} className={classes.closeicon}>
                            <CloseIcon/>
                        </IconButton>
                        <div>
                        <Typography className={classes.title1} variant="body1">{course.CourseID}</Typography>
                        </div>
                        <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
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
                    </Paper>
                    </Grow>
                </Popper>
        </Paper>
    );
}

export default Course;