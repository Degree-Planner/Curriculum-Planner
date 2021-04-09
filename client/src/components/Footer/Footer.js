import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Grid, Divider } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/csc530/dev');

        setUser(null);
    };

    useEffect(() => {
        //const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
    <AppBar className={classes.footer} position="static" color="inherit">
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <Typography className={classes.heading} variant="h5" align="center">Links</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.heading} variant="h5" align="center">Team Management</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.heading} variant="h5" align="center">Contributors</Typography>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://www.murraystate.edu/academics/CollegesDepartments/CollegeOfBusiness/index.aspx">College Of Business</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://trello.com/b/G0ZZ6yAA/530-curriculum-plan">Trello</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <Typography className={classes.heading} variant="p" align="center">Jonathan Crafton</Typography>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="http://campus.murraystate.edu/classes/">RacerNet</a>
                </center>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
                <center>
                    <Typography className={classes.heading} variant="p" align="center">Jacob Paluso</Typography>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://www.murraystate.edu/">Murray State Main Webpage</a>
                </center>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
                <center>
                    <Typography className={classes.heading} variant="p" align="center">Noah Rudolph</Typography>
                </center>
            </Grid>
            <br></br>
            <br></br>
            <Grid item xs={12}>
                <Divider className={classes.divider} variant="middle" />
            </Grid>
            <br></br>
            <Grid item xs={12}>
                <center>
                    <Typography className={classes.heading} variant="p" align="center">&copy;{new Date().getFullYear()} CSC 530 Degree Plan Project | All rights reserved </Typography>
                </center>
            </Grid>
      </Grid>
    </AppBar>
    )};

export default Footer;