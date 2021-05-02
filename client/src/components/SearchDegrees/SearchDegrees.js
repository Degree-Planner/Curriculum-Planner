import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

import SearchDegree from './SearchDegree/SearchDegree';
import useStyles from './styles';
    
const SearchDegrees = ({ degreeSearch }) => {
    const searchText = 'test';
    const degrees = useSelector((state) => state.degrees);
    const search = degrees.find(d=>d.DegreeName===searchText);
    const array = [];
    array.push(search);
    const classes = useStyles();
    
    function UserSearch() {
        return      !degrees.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            
            {degreeSearch.map((degree) => (
              <SearchDegree degree={degree} key={degree._id}/>
            ))}
          </Grid>
        )

    }
  
    return (
        <UserSearch/>
    );
};

export default SearchDegrees;