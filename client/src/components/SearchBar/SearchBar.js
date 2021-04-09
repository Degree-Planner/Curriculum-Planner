import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Container, Grow, IconButton} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const SearchBar = () => {
    const searchText = 'Computer Science B.S.';
    const degrees = useSelector((state) => state.degrees);

    const classes = useStyles();
    const [searchData, setSearchData] = useState({DegreeName: ''});
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchData.DegreeName);
        
        const search = degrees.filter(d=>d.DegreeName.toLowerCase().includes(searchData.DegreeName.toLowerCase()));
        console.log('SearchBar: ',search);
        console.log(degrees);
        history.push({pathname: `/csc530/dev/searchdegree`, degreeSearch: search})
    }
    
    
    return (
        <Grow in>
            <Container>
                <form>
                <center>
                    <InputBase className={classes.input} placeholder="Search for a Plan" inputProps={{ 'aria-label': 'search for a plan' }} value={searchData.DepartmentName} onChange={(e) => setSearchData({ ...searchData, DegreeName: e.target.value })}/>
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick = {handleSubmit}>
                        Search <SearchIcon />
                    </IconButton>
                </center>
                </form>
            </Container>
        </Grow>
    )
}

export default SearchBar;