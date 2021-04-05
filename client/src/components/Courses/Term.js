import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './styles';
    
const Term = ({ term, courses, hovered, course, red, white, green, onMouseEnter, onMouseLeave }) => {
    const classes = useStyles();

    const findHighlightedRed = () => {
        var result = []
        course.PreReqs.map((course) => result.push(courses.find(Course => Course.CourseID === course))) 
        return result
    }

    const findHighlightedGreen = () => {
        var result = []
        courses.map((currentcourse) => currentcourse.PreReqs.find(CourseID => CourseID === course.CourseID ? result.push(currentcourse) : result.push()))
        return result
    }

    const highlightRed = hovered && course !== undefined ? findHighlightedRed() : []
    const highlightGreen = hovered && course !== undefined ? findHighlightedGreen() : []
  
    return (
        !courses.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
            {courses.map((course) => (
                course.Term === term ?
                highlightRed.find(Course => Course.CourseID === course.CourseID) ?
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={red} course={course} key={course.CourseID}/>
                </Container> : 
                highlightGreen.find(Course => Course.CourseID === course.CourseID) ?
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={green} course={course} key={course.CourseID}/>
                </Container> : 
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={white} course={course} key={course.CourseID}/>
                </Container>
            : <br></br>))}
        </Grid>
      )
    );
};

export default Term;