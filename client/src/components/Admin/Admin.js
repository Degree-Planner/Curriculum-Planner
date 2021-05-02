import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Grow, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Admin = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const handleClick =()=>{
        localStorage.removeItem('courses');
        localStorage.removeItem('degrees');
        history.push({pathname: `/csc530/dev/admin/add`});
        
    }
    
    return (
        <Grow in>
            <Container>
                    <Typography className={classes.heading} variant="h2" align="center">Admin Dashboard</Typography>
                    <Typography className={classes.heading} variant="h5" align="center">Create a degree or edit an existing degree.</Typography>
                    <br></br>
                    <br></br>
                    <center>
                        <Button variant="contained" className={classes.buttons} size="large" color="primary" onClick={handleClick}>Add Degree</Button>
                        <Button variant="contained" className={classes.buttons} size="large" color="primary" component={Link} to="/csc530/dev/admin/editdegree">Edit Existing Degree</Button>
                        <Button variant="contained" className={classes.buttons} size="large" color="primary" component={Link} to="/csc530/dev/admin/addadmin">Add New Administrator</Button>
                    </center>
                    {location.message ? <Typography className={classes.signin} variant="h5" align="center">{location.message}</Typography> : <br></br>}
            </Container>
        </Grow>
    )
}

export default Admin;