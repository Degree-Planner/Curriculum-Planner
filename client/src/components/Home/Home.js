import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Grow, Button, Typography, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch } from 'react-redux';
//import {searchDegrees} from '../../actions/degrees';
import {useHistory} from 'react-router-dom';
//import { UserSearch } from '../Degrees/Degrees';
import Degree from '../Degrees/Degree/Degree';
import SearchBar from '../SearchBar/SearchBar';
import { getDegrees } from '../../actions/degrees';

import useStyles from './styles';

const Home = () => {
    const history = useHistory();
    const classes = useStyles();
    const [searchData, setSearchData] = useState({DepartmentName: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDegrees());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchData);
        //dispatch(UserSearch(searchData));
    }
    
    
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
            </Container>
        </Grow>
    )
}

export default Home;