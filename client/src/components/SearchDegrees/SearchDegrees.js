import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

import SearchDegree from './SearchDegree/SearchDegree';
import useStyles from './styles';
import SearchBar from '../SearchBar/SearchBar';
    
const SearchDegrees = ({ degreeSearch }) => {
    const searchText = 'test';
    const degrees = useSelector((state) => state.degrees);
    const search = degrees.find(d=>d.DegreeName===searchText);
    const array = [];
    array.push(search);
    const classes = useStyles();
    console.log(degrees);
    console.log(search);
    console.log(array);
    console.log(degreeSearch);
    
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