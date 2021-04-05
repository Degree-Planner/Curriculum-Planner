import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './styles';
    
const Term = ({ term, courses, hovered, course, red, lightRed, white, green, lightGreen, onMouseEnter, onMouseLeave }) => {
    const classes = useStyles();

    const findHighlightedRed = () => {
        var result = []
        course.PreReqs.map((course) => result.push(courses.find(Course => Course.CourseID === course))) 
        return result
    }

    const findHighlightedRedArray = (courseArray) => {
        var result = []
        courseArray.PreReqs.map((course) => result.push(courses.find(Course => Course.CourseID === course))) 
        return result
    }

    const findHighlightedLightRed = () => {
        var result = []
        var resultB = []
        var resultC = []
        course.PreReqs.map((course) => result.push(courses.find(Course => Course.CourseID === course))) 
        result.map(CourseA => resultB.push(findHighlightedRedArray(CourseA)))
        resultB.map(array => array.map(Course => resultC.push(Course)))
        return resultC
    }

    const findHighlightedGreen = () => {
        var result = []
        courses.map((currentcourse) => currentcourse.PreReqs.find(CourseID => CourseID === course.CourseID ? result.push(currentcourse) : result.push()))
        return result
    }

    const findHighlightedGreenArray = (CourseA) => {
        var result = []
        courses.map((currentcourse) => currentcourse.PreReqs.find(CourseID => CourseID === CourseA.CourseID ? result.push(currentcourse) : result.push()))
        return result
    }

    const findHighlightedLightGreen = () => {
        var result = []
        var resultB = []
        var resultC = []
        courses.map((currentcourse) => currentcourse.PreReqs.find(CourseID => CourseID === course.CourseID ? result.push(currentcourse) : result.push()))
        result.map(CourseA => resultB.push(findHighlightedGreenArray(CourseA)))
        resultB.map(array => array.map(Course => resultC.push(Course)))
        return resultC
    }

    const highlightRed = hovered && course !== undefined ? findHighlightedRed() : []
    const highlightGreen = hovered && course !== undefined ? findHighlightedGreen() : []
    const highlightLightRed = hovered && course !== undefined ? findHighlightedLightRed() : []
    const highlightLightGreen = hovered && course !== undefined ? findHighlightedLightGreen() : []
  
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
                highlightLightRed.find(Course => Course.CourseID === course.CourseID) ?
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={lightRed} course={course} key={course.CourseID}/>
                </Container>:
                highlightLightGreen.find(Course => Course.CourseID === course.CourseID) ?
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={lightGreen} course={course} key={course.CourseID}/>
                </Container>:
                <Container onMouseEnter={(event) => onMouseEnter(event, course)} onMouseLeave={onMouseLeave}>
                    <Course style={white} course={course} key={course.CourseID}/>
                </Container>
            : <br></br>))}
        </Grid>
      )
    );
};

export default Term;