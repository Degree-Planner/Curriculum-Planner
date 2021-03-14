import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Degree from './Degree/Degree';
import useStyles from './styles';
    
const Degrees = ({ setCurrentId }) => {
    const degrees = useSelector((state) => state.degrees);
    const classes = useStyles();
  
    return (
      !degrees.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {degrees.map((degree) => (
            <Degree degree={degree}/>
          ))}
        </Grid>
      )
    );
};

export default Degrees;