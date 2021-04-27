import React, { useState, useEffect } from 'react';
import { TextField, Typography, Paper } from "@material-ui/core";
import { useSelector } from 'react-redux';
import useStyles from './styles';
import {useLocation, Redirect } from 'react-router-dom';
    
const EditDegree = ({currentId, degreeInformation, updateCourseInfo}) => {
    const [degreeData, setDegreeData] = useState({DegreeName: '', DegreeDescription: '', Courses: []});
    const location = useLocation();
    const degree = useSelector((state) => currentId ? state.degree.find((p) => p._id === currentId) : null);
    const classes = useStyles();

    useEffect(() => {
        if(location.degree){
            setDegreeData(location.degree);
        } else
            <Redirect to="/csc530/dev/admin"/>
    } , [degree])

    console.log(degreeData.Courses);
    updateCourseInfo(degreeData.Courses);

    return (
        !location.degree ? (
            <Redirect to="/csc530/dev/admin"/>
        ) : (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={degreeInformation(degreeData)}>
            <Typography variant="h6">Edit Degree Information</Typography>
            <TextField name="degreename" variant="outlined" label="Degree Name" fullWidth value={degreeData.DegreeName} onChange={(e) => setDegreeData({ ...degreeData, DegreeName: e.target.value })}/>
            <TextField name="degreedescription" multiline rows={5} variant="outlined" label="Degree Description" fullWidth value={degreeData.DegreeDescription} onChange={(e) => setDegreeData({ ...degreeData, DegreeDescription: e.target.value })}/>
            </form>
        </Paper>
        )
    );
}

export default EditDegree;