import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createDegree } from '../../actions/degrees';
import { useHistory } from 'react-router-dom';
    
const AddDegree = ({degreeInformation}) => {
    const [degreeData, setDegreeData] = useState({DegreeName: '', DegreeDescription: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    /*const clear = () =>{
        setDegreeData({DegreeName: '', DegreeDescription: ''});
    }*/

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={degreeInformation(degreeData)}>
            <Typography variant="h6">Degree Information</Typography>
            <TextField name="degreename" variant="outlined" label="Degree Name" fullWidth value={degreeData.DegreeName} onChange={(e) => setDegreeData({ ...degreeData, DegreeName: e.target.value })}/>
            <TextField name="degreedescription" multiline rows={5} variant="outlined" label="Degree Description" fullWidth value={degreeData.DegreeDescription} onChange={(e) => setDegreeData({ ...degreeData, DegreeDescription: e.target.value })}/>
            </form>
        </Paper>
    );
}

export default AddDegree;