import React, {useState, useEffect} from 'react';
import { Paper, Grow, Typography} from '@material-ui/core';

import useStyles from './styles';

const AddDegreeStepperReview = () => {
    const classes = useStyles();
    const degreeName = 'Placeholder';
    const degreeDescription = 'Placeholder';
    const courses = ['Placeholder'];

    
    
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