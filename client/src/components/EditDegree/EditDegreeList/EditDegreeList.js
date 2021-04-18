import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Typography} from '@material-ui/core';
import EditDegrees from '../EditDegrees/EditDegrees';
import useStyles from './styles';
import { getDegrees } from '../../../actions/degrees';

const EditDegreeList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDegrees());
    }, [dispatch]);
    
    return (
        <Grow in>
            <Container>
            <Typography className={classes.heading} variant="h3" align="center">Degree List</Typography>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <EditDegrees />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default EditDegreeList;