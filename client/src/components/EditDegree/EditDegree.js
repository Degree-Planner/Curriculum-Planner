import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { updateDegree } from '../../actions/degrees';
import {useLocation, Redirect, useHistory} from 'react-router-dom';
import {deleteDegree} from '../../actions/degrees';
    
const EditDegree = ({currentId, setCurrentId, degreeInformation, updateCourseInfo}) => {
    const [degreeData, setDegreeData] = useState({DegreeName: '', DegreeDescription: '', Courses: []});
    const location = useLocation();
    const degree = useSelector((state) => currentId ? state.degree.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(location.degree){
            setDegreeData(location.degree);
        } else
            <Redirect to="/csc530/dev/admin"/>
    } , [degree])

    console.log(degreeData.Courses);
    updateCourseInfo(degreeData.Courses);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(location.degree){
            dispatch(updateDegree(location.degree._id, degreeData, history));
            console.log(location.degree._id);
        }else
            <Redirect to="/csc530/dev/admin"/>
        
        clear();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if(location.degree){
            alert("Deleting Degree");
            dispatch(deleteDegree(location.degree._id, history));
            alert("Degree Sucessfully Deleted");
        }else
            <Redirect to='/csc530/dev/admin'/>

        clear();

    }

    const clear = () =>{
        setDegreeData({DegreeName: '', DegreeDescription: ''});
    }

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