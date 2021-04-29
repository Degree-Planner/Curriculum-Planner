import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import murraystatelogowhite from '../../images/MSUCSISLOGO.png';

const Navbar = () => {
    const classes = useStyles();    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const admin = () => {
        history.push('/csc530/dev/admin');
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/csc530/dev');

        setUser(null);
    };

    useEffect(() => {
        //const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
        <div>
            <Link to="/csc530/dev">
                <img className={classes.image} src={murraystatelogowhite} alt="murraystate logo" height="60"></img>
            </Link>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Grid container spacing={5}>
                        <Grid item xs={3}>
                            <Avatar className={classes.purple} alt={user.userData.name} src={user.userData.imageUrl}>{user.userData.name.charAt(0)}</Avatar>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography className={classes.userName} noWrap={true} variant="h6">{user.userData.name}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Button variant="contained" className={classes.admin} onClick={admin}>Admin</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <Button component={Link} to="/csc530/dev/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    )};

export default Navbar;