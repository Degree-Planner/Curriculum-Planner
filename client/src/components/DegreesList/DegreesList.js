import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';

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