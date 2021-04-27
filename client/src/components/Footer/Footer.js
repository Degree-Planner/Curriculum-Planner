import React from 'react';
import { AppBar, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();    

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
                    <a className={classes.a} href="https://www.murraystate.edu/academics/CollegesDepartments/CollegeOfBusiness/index.aspx">College of Business</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://trello.com/b/G0ZZ6yAA/530-curriculum-plan">Trello</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://www.linkedin.com/in/jonathan-crafton-125b5120b/">Jonathan Crafton</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://github.com/Degree-Planner/Curriculum-Planner">Github</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://www.linkedin.com/in/jacob-paluso-2616a651/">Jacob Paluso</a>
                </center>
            </Grid>
            <Grid item xs={4}>
                <center>
                    
                </center>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
                <center>
                    <a className={classes.a} href="https://www.linkedin.com/in/noah-rudolph-695098210/">Noah Rudolph</a>
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