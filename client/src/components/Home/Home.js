import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';

import Courses from '../Courses/Courses';
import Form from '../Form/Form';
import useStyles from './styles';
import { getCourses } from '../../actions/courses';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);
    
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Courses />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;