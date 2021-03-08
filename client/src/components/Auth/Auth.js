import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, FormHelperText } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Icon from './icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { authAdmin } from '../../actions/auth';

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch(authAdmin(result, token));
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in was unsuccessful. Try again later");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign in With Google</Typography>
                <GoogleLogin 
                    clientId="1036137753858-mmis16l0vag4c0giieldk6g4mk45d5gr.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
            </Paper>
        </Container>
    )
}

export default Auth;
