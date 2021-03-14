import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './styles';
    
const Courses = ({ setCurrentId }) => {
    const courses = useSelector((state) => state.courses);
    const classes = useStyles();
  
    return (
      !courses.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
          {courses.map((course) => (
            <Course course={course}/>
          ))}
        </Grid>
      )
    );
};

export default Courses;