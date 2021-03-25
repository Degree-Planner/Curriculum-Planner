import React from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './styles';
    
const Courses = (DegreeCourses) => {
    const courses = DegreeCourses.courses;
    const classes = useStyles();
  
    console.log(courses)

    return (
      !courses.length ? <CircularProgress /> : (
        <Container>
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
          {courses.map((course) => (
            <Course course={course} key={course.CourseID}/>
          ))}
        </Grid>
        </Container>
      )
    );
};

export default Courses;