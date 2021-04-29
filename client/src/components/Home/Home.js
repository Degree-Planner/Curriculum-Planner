import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Grow, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { getDegrees } from '../../actions/degrees';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getDegrees());
    }, [dispatch]);
    
    return (
        <Grow in>
            <Container>
                    <Typography className={classes.heading} variant="h2" align="center">Degree Plans</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Explore our many programs of study to find the one that best fits you.</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Search for a specific plan or view all plans by using the options below.</Typography>
                    <center>
                    <SearchBar/>
                    <Button variant="contained" size="large" color="primary" component={Link} to="/csc530/dev/degrees">View All Plans</Button>
                    </center>
                    {location.message ? <Typography className={classes.signin} variant="h5" align="center">{location.message}</Typography> : <br></br>}
                    <div className={classes.spacer}></div>
            </Container>
        </Grow>
    )
}

console.warn = () => {};
console.error = () => {};

export default Home;