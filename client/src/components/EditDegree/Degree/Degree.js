import React from 'react';
import { Accordion, AccordionSummary, Container, Grid, Button, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import {deleteDegree} from '../../../actions/degrees';

import useStyles from './styles';
    

const Degree = ({ degree, setCurrentId }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();



    const handleClick = (e) => {
        e.preventDefault();

        setCurrentId = degree._id
        history.push({pathname: `/csc530/dev/admin/edit/${degree._id}`, degree: degree})
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if(degree){
            if(window.confirm('Are you sure you wish to delete this degree?')){
                dispatch(deleteDegree(degree._id, history));
                alert("Degree Sucessfully Deleted");
            }
            
        }else
            <Redirect to='/csc530/dev/admin'/>

    }
    return (
        <Container maxWidth="sm" className={classes.container}>
        <Accordion className={classes.card}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Button color="primary" variant="contained" onClick={handleClick}>EDIT</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.button} variant="contained" onClick={handleDelete}>DELETE</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.title} variant="body1">{degree.DegreeName}</Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div>
                    <Typography className={classes.details} variant="body2">{degree.DegreeDescription}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
        </Container>
    );
}

export default Degree;