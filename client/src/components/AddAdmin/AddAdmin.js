import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createAdmin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
    
const AddAdmin = () => {
    const [adminData, setAdminData] = useState({email:''});
    const [isEmail, setIsEmail] = useState({bool:false});
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        // email validation from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setIsEmail(re.test(String(adminData.email).toLowerCase()));
        
        if(isEmail === true){
            dispatch(createAdmin(adminData));
            history.push({pathname: '/csc530/dev/admin', message: 'Admin successfully added!'})
        }
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center" className={classes.title}>Add New Administrator</Typography>
            <Typography variant="h6" align="center" className={classes.note}>Please enter email for authorization</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField error={adminData.email === ""} name="email" variant="outlined" label="Email" placeholder="Ex. johndoe@murraystate.edu" fullWidth value={adminData.email} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
            </form>
        </Paper>
    );
}

export default AddAdmin;