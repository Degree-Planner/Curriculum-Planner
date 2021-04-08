import React from 'react';
import { Popover, AccordionActions, AccordionSummary, Container, Button, Typography, AccordionDetails, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';

import useStyles from './styles';
    
const Course = ({ course, style }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Paper square={true} className={style} onClick={handleClick}>
                <Typography className={classes.id} variant="body1">{course.CourseID}</Typography>
                <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
                <Typography className={classes.credits} variant="body2">{course.CreditHours} Credits</Typography>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                </Popover>
        </Paper>
    );
}

export default Course;