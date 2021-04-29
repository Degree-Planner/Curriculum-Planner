import React, { useState } from 'react';
import { TextField, Typography, Paper } from "@material-ui/core";
import useStyles from './styles';
    
const AddDegree = ({degreeInformation}) => {
    const [degreeData, setDegreeData] = useState({DegreeName: '', DegreeDescription: '', Courses: []});
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center" className={classes.title}>Degree Information</Typography>
            <Typography variant="h6" align="center" className={classes.note}>Required fields that are not currently filled are denoted in red</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={degreeInformation(degreeData)}>
            <TextField error={degreeData.DegreeName === ""} name="degreename" variant="outlined" label="Degree Name" fullWidth value={degreeData.DegreeName} onChange={(e) => setDegreeData({ ...degreeData, DegreeName: e.target.value })}/>
            <TextField error={degreeData.DegreeDescription === ""} name="degreedescription" multiline rows={5} variant="outlined" label="Degree Description" fullWidth value={degreeData.DegreeDescription} onChange={(e) => setDegreeData({ ...degreeData, DegreeDescription: e.target.value })}/>
            </form>
        </Paper>
    );
}
export default AddDegree;