import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Link, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import Degrees from '../Degrees/Degrees';
import Form from '../Form/Form';
import useStyles from './styles';
import { getDegrees } from '../../actions/degrees';

const DegreeList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDegrees());
    }, [dispatch]);
    
    return (
        <Grow in>
            <Container>
            <InputBase className={classes.input} placeholder="Search for a Plan" inputProps={{ 'aria-label': 'search for a plan' }}/>
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" component={Link} to="/csc530/dev/search">
                        Search <SearchIcon />
                    </IconButton>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Degrees />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default DegreeList;