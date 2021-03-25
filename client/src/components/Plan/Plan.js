import React, { useEffect } from 'react';
import { Paper, Grow, Grid, Tabs, Tab, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Courses from '../Courses/Courses';
import useStyles from './styles';

const Plan = () => {
    const classes = useStyles();
    const degrees = useSelector((state) => state.degrees);
    const location = useLocation();
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(degrees)
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    
    return (
        !location.degree ? (
            <Redirect to="/csc530/dev/degrees"/>
        ) : (
            <Grow in>
                <Paper variant="outlined" className={classes.paper}>
                    <Typography className={classes.heading} variant="h2" align="center">{location.degree.DegreeName}</Typography>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Courses courses={location.degree.Courses}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        </Grid>
                    </Grid>
                </Paper>
        </Grow>
        )
    )
}

export default Plan;