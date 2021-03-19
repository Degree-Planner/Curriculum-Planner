import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grow, Grid, Button, Typography, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
                    <Typography className={classes.heading} variant="h2" align="center">Degree Plans</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Explore our many programs of study to find the one that best fits you.</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Search for a specific plan or view all plans by using the options below.</Typography>
                    <br></br>
                    <InputBase
                        className={classes.input}
                        placeholder="Search for a Plan"
                        inputProps={{ 'aria-label': 'search for a plan' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <br></br>
                    <br></br>
                    <Button variant="contained" size="large" color="primary" component={Link} to="/csc530/dev/degrees">View All Plans</Button>
            </Container>
        </Grow>
    )
}

export default Home;