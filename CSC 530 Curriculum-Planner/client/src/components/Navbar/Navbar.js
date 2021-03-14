import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import murraystatelogowhite from '../../images/murraystatelogowhite.png';

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
    <AppBar className={classes.appBar} position="fixed" color="inherit">
        <div>
            <img className={classes.image} src={murraystatelogowhite} alt="murraystate logo" height="60"></img>
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