import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createCourse } from '../../actions/courses';
    
const Form = ({courseInformation, updateCourseInfo}) => {
    const [courseData, setCourseData] = useState({CourseID:'', CourseTitle: '', CourseDescription: '', MinimumGrade: '', CreditHours: '', PreReqs: [], CoReqs: [], Term: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(createCourse(courseData));

        if(courseData.CourseID =="" || courseData.CourseTitle == "" || courseData.CourseDescription == "" || courseData.MinimumGrade == "" || courseData.CreditHours == "" || courseData.Term == ""){
            console.log("Please enter data in all required fields");
            console.log("Required fields: Department Code, Course Number, Course Title, Course Description, Minimum Grade, Credit Hours, and Term");
        }
        else{
            courseInformation(courseData);
            clear();
            updateCourseInfo();
        }

    }
    const addPreReqs=(value)=>{
        var temp = value.split(',');
        console.log(temp);
        setCourseData({ ...courseData, PreReqs: temp });
    }

    const addCoReqs=(value)=>{
        var temp = value.split(',');
        console.log(temp);
        setCourseData({ ...courseData, CoReqs: temp });
    }

    const clear = () =>{
        setCourseData({CourseID:'', CourseTitle: '', CourseDescription: '', MinimumGrade: '', CreditHours: '', PreReqs: [], CoReqs: [], Term: ''});
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center" className={classes.title}>Add Course</Typography>
            <Typography variant="h6" align="center" className={classes.note}>Required fields that are not currently filled are denoted in red</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField error={courseData.CourseID === ""} name="courseid" variant="outlined" label="CourseID" placeholder="Ex. CSC" fullWidth value={courseData.CourseID} onChange={(e) => setCourseData({ ...courseData, CourseID: e.target.value })}/>
            <TextField error={courseData.CourseTitle === ""} name="coursetitle" variant="outlined" label="Course Title" placeholder="Ex. Introduction to Problem Solving Using Computers" fullWidth value={courseData.CourseTitle} onChange={(e) => setCourseData({ ...courseData, CourseTitle: e.target.value })}/>
            <TextField error={courseData.CourseDescription === ""} name="coursedescription" variant="outlined" label="Course Description" placeholder="Ex. This course is an introduction to problem-solving using computers..." fullWidth value={courseData.CourseDescription} onChange={(e) => setCourseData({ ...courseData, CourseDescription: e.target.value })}/>
            <TextField error={courseData.MinimumGrade === ""} inputProps={{ maxLength: 1 }} name="minimumgrade" variant="outlined" label="Minimum Grade" placeholder="Ex. C" fullWidth value={courseData.MinimumGrade} onChange={(e) => setCourseData({ ...courseData, MinimumGrade: e.target.value })}/>
            <TextField error={courseData.CreditHours === ""} type="number" name="credithours" variant="outlined" label="Credit Hours" placeholder="Ex. 3" fullWidth value={courseData.CreditHours} onChange={(e) => setCourseData({ ...courseData, CreditHours: e.target.value })}/>
            <TextField name="prerequisites" variant="outlined" label="Prerequisites" placeholder="Ex. CSC 223, CSC 310"fullWidth value={courseData.PreReqs} onChange={(e) => addPreReqs(e.target.value)}/>
            <TextField name="corequisites" variant="outlined" label="Corequisites" placeholder="Ex. CSC 125, CSC 325" fullWidth value={courseData.CoReqs} onChange={(e) => addCoReqs(e.target.value)}/>
            <TextField error={courseData.Term === ""} type="number" name="term" variant="outlined" label="Term" placeholder="Ex. 1" fullWidth value={courseData.Term} onChange={(e) => setCourseData({ ...courseData, Term : e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
            </form>
        </Paper>
    );
}

export default Form;