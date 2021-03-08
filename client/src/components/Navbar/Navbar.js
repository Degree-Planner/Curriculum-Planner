import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import murraystate from '../../images/murraystate.png';

const Navbar = () => {
    const classes = useStyles();    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        //const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">CSC 530 Degree Planner</Typography>
            <img className={classes.image} src={murraystate} alt="murraystate" height="60"></img>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div classname={classes.profile}>
                    <Avatar className={classes.purple} alt={user.userData.name} src={user.userData.imageUrl}>{user.userData.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.userData.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    )};

export default Navbar;