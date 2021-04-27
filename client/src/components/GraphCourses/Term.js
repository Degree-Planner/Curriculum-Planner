import React from 'react';
import {CircularProgress, Container} from '@material-ui/core';

import Course from './Course/Course';
    
const Term = ({ term, courses, hovered, course, red, lightRed, white, green, yellow, lightGreen, onMouseEnter, onMouseLeave }) => {

    const findHighlightedRed = () => {
        var result = []
        course.PreReqs.map((course) => courses.find(Course => Course.CourseID === course) !== undefined ? result.push(courses.find(Course => Course.CourseID === course)) : result.push()) 
        return result
    }

    const findHighlightedRedArray = (courseArray) => {
        var result = []
        courseArray.PreReqs.map((course) => courses.find(Course => Course.CourseID === course) !== undefined ? result.push(courses.find(Course => Course.CourseID === course)) : result.push())  
        return result
    }

    const findHighlightedLightRed = () => {
        var result = []
        var resultB = []
        var resultC = []
        course.PreReqs.map((course) => courses.find(Course => Course.CourseID === course) !== undefined ? result.push(courses.find(Course => Course.CourseID === course)) : result.push()) 
        result.map(CourseA => resultB.push(findHighlightedRedArray(CourseA)))
        resultB.map(array => array.map(Course => resultC.push(Course)))
        return resultC
    }

    const findHighlightedYellow = () => {
        var result = []
        course.CoReqs.map((course) => courses.find(Course => Course.CourseID === course) !== undefined ? result.push(courses.find(Course => Course.CourseID === course)) : result.push()) 
        return result
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
    const highlightYellow = hovered && course !== undefined ? findHighlightedYellow() : []
    const currentCourse = course

  
    return (
        !courses.length ? <CircularProgress /> : (
        <Container fixed disableGutters>
            {courses.map((course) => (
                course.Term === term ?
                highlightRed.find(Course => Course.CourseID === course.CourseID) ?
                    <Course style={red} course={course} hovered={hovered} related={true} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>: 
                highlightGreen.find(Course => Course.CourseID === course.CourseID) ?
                    <Course style={green} course={course} hovered={hovered} related={true} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>:
                highlightLightRed.find(Course => Course.CourseID === course.CourseID) ?
                    <Course style={lightRed} course={course} hovered={hovered} related={true} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>:
                highlightLightGreen.find(Course => Course.CourseID === course.CourseID) ?
                    <Course style={lightGreen} course={course} hovered={hovered} related={true} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>:
                highlightYellow.find(Course => Course.CourseID === course.CourseID) ?
                    <Course style={yellow} course={course} hovered={hovered} related={true} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>:
                <Course style={white} course={course} hovered={hovered} related={false} currentCourse={currentCourse} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            : <></>))}
        </Container>
      )
    );
};

export default Term;