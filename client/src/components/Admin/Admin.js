import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grow, Button, Typography } from '@material-ui/core';

import useStyles from './styles';
import { getCourses } from '../../actions/courses';

const Admin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Grow in>
            <Container>
                    <Typography className={classes.heading} variant="h2" align="center">Admin Dashboard</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Create a degree or edit an existing degree.</Typography>
                    <br></br>
                    <br></br>
                    <Button variant="contained" className={classes.buttons} size="large" color="primary" component={Link} to="/csc530/dev/admin/add">Add Degree</Button>
                    <Button variant="contained" className={classes.buttons} size="large" color="primary" component={Link} to="/csc530/dev/admin/editdegree">Edit Existing Degree</Button>
            </Container>
        </Grow>
    )
}

export default Admin;