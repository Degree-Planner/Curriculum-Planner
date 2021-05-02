import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Typography} from '@material-ui/core';
import SearchBar from '../SearchBar/SearchBar'
import SearchDegrees from '../SearchDegrees/SearchDegrees';
import useStyles from './styles';
import { getDegrees } from '../../actions/degrees';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';

const SearchDegreeList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const degreeSearch = location.degreeSearch;

    useEffect(() => {
        dispatch(getDegrees());
    }, [dispatch]);
    
    return (
        !location.degreeSearch ? (
            <Redirect to="/csc530/dev/degrees"/>
        ) : (
        <Grow in>
            <Container>
            <Typography className={classes.heading} variant="h3" align="center">Degree List</Typography>
            <SearchBar/>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <SearchDegrees degreeSearch = {degreeSearch}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        )
    )
}

export default SearchDegreeList;