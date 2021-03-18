import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createCourse } from '../../actions/courses';
    
const Form = () => {
    const [courseData, setCourseData] = useState({DepartmentCode: '', CourseNumber: Number, CourseTitle: '', CourseDescription: '', MinimumGrade: '', CreditHours: Number});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createCourse(courseData));
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Add Course</Typography>
            <TextField name="departmentcode" variant="outlined" label="Department Code" fullWidth value={courseData.DepartmentCode} onChange={(e) => setCourseData({ ...courseData, DepartmentCode: e.target.value })}/>
            <TextField name="coursenumber" variant="outlined" label="Course Number" fullWidth value={courseData.CourseNumber} onChange={(e) => setCourseData({ ...courseData, CourseNumber: e.target.value })}/>
            <TextField name="coursetitle" variant="outlined" label="Course Title" fullWidth value={courseData.CourseTitle} onChange={(e) => setCourseData({ ...courseData, CourseTitle: e.target.value })}/>
            <TextField name="coursedescription" variant="outlined" label="Course Description" fullWidth value={courseData.CourseDescription} onChange={(e) => setCourseData({ ...courseData, CourseDescription: e.target.value })}/>
            <TextField name="minimumgrade" variant="outlined" label="Minimum Grade" fullWidth value={courseData.MinimumGrade} onChange={(e) => setCourseData({ ...courseData, MinimumGrade: e.target.value })}/>
            <TextField name="credithours" variant="outlined" label="Credit Hours" fullWidth value={courseData.CreditHours} onChange={(e) => setCourseData({ ...courseData, CreditHours: e.target.value })}/>
            <TextField name="prerequisites" variant="outlined" label="Prerequisites" fullWidth value={courseData.PreReqs} onChange={(e) => setCourseData({ ...courseData, PreReqs: e.target.value })}/>
            <TextField name="corequisites" variant="outlined" label="Corequisites" fullWidth value={courseData.CoReqs} onChange={(e) => setCourseData({ ...courseData, CoReqs: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;