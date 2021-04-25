import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createCourse } from '../../actions/courses';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
    
const EditCourses = ({courseInformation}) => {
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
        }

    }
    const addPreReqs=(value)=>{
        if(value != ""){
            var temp = value.split(',');
            console.log(temp);
            setCourseData({ ...courseData, PreReqs: temp });
        }
        else{
            setCourseData({ ...courseData, PreReqs: [] });
        }
    }

    const addCoReqs=(value)=>{
        if(value != ""){
            var temp = value.split(',');
            console.log(temp);
            setCourseData({ ...courseData, CoReqs: temp });
        }
        else{
            setCourseData({ ...courseData, CoReqs: [] });
        }
    }

    const clear = () =>{
        setCourseData({CourseID:'', CourseTitle: '', CourseDescription: '', MinimumGrade: '', CreditHours: '', PreReqs: [], CoReqs: [], Term: ''});
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center" className={classes.title}>Edit Courses</Typography>
            <Typography variant="h6" align="center" className={classes.note}>Required fields that are not currently filled are denoted in red</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <TextField error={courseData.CourseID === ""} name="courseid" variant="outlined" label="CourseID" placeholder="Ex. CSC 101" fullWidth value={courseData.CourseID} onChange={(e) => setCourseData({ ...courseData, CourseID: e.target.value.split(" ").join("").toUpperCase() })}/>
            <TextField error={courseData.CourseTitle === ""} name="coursetitle" variant="outlined" label="Course Title" placeholder="Ex. Introduction to Problem Solving Using Computers" fullWidth value={courseData.CourseTitle} onChange={(e) => setCourseData({ ...courseData, CourseTitle: e.target.value })}/>
            <TextField error={courseData.CourseDescription === ""} name="coursedescription" variant="outlined" label="Course Description" placeholder="Ex. This course is an introduction to problem-solving using computers..." fullWidth value={courseData.CourseDescription} onChange={(e) => setCourseData({ ...courseData, CourseDescription: e.target.value })}/>
            <FormControl variant="outlined" error={courseData.MinimumGrade === ""} className={classes.formControl}>
                <InputLabel id="demo-simple-select-label"error={courseData.MinimumGrade === ""}>Minimum Grade</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={courseData.MinimumGrade} onChange={(e) => setCourseData({ ...courseData, MinimumGrade: e.target.value.split(" ").join("").toUpperCase() })} label="Minimum Grade">
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                    <MenuItem value={'D'}>D</MenuItem>
                    <MenuItem value={'E'}>E</MenuItem>
                    <MenuItem value={'F'}>F</MenuItem>
                    <MenuItem value={'P'}>P</MenuItem>
                </Select>
            </FormControl>
            <TextField error={courseData.CreditHours === ""} type="number" name="credithours" variant="outlined" label="Credit Hours" placeholder="Ex. 3" fullWidth value={courseData.CreditHours} onChange={(e) => setCourseData({ ...courseData, CreditHours: e.target.value })}/>
            <TextField name="prerequisites" variant="outlined" label="Prerequisites" placeholder="Ex. CSC 223, CSC 310"fullWidth value={courseData.PreReqs} onChange={(e) => addPreReqs(e.target.value.split(" ").join(""))}/>
            <TextField name="corequisites" variant="outlined" label="Corequisites" placeholder="Ex. CSC 125, CSC 325" fullWidth value={courseData.CoReqs} onChange={(e) => addCoReqs(e.target.value.split(" ").join(""))}/>
            <FormControl variant="outlined" error={courseData.Term === ""} className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label" error={courseData.Term === ""}>Term</InputLabel>
                <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={courseData.Term} onChange={(e) => setCourseData({ ...courseData, Term : e.target.value })} label="Term">
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </FormControl>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Save</Button>
            </form>
        </Paper>
    );
}

export default EditCourses;