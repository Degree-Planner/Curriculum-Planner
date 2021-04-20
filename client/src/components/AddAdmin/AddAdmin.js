import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createAdmin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
    
const AddAdmin = ({courseInformation, updateCourseInfo}) => {
    const [adminData, setAdminData] = useState({email:''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAdmin(adminData));
        history.push({pathname: '/csc530/dev/admin', message: 'Admin successfully added!'})
    }

    const clear = () =>{
        setAdminData({email:''});
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