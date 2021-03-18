import React from 'react';
import { Accordion, AccordionActions, AccordionSummary, Card, Button, Typography, AccordionDetails } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';
    

const Degree = ({ degree }) => {
    const classes = useStyles();
    return (
        <Accordion className={classes.card}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}>
                <div>
                    <Typography className={classes.title} variant="body1">{degree.DegreeName}</Typography>
                </div>
                <Button color="primary" variant="contained">VIEW</Button>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div>
                    <Typography className={classes.details} variant="body2">{degree.DegreeDescription}</Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default Degree;