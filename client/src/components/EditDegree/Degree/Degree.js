import React from 'react';
import { Accordion, AccordionSummary, Container, Button, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
    

const Degree = ({ degree, setCurrentId }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();

        setCurrentId = degree._id
        history.push({pathname: `/csc530/dev/admin/edit/${degree._id}`, degree: degree})
    }

    return (
        <Container maxWidth="sm" className={classes.container}>
        <Accordion className={classes.card}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}>
                <Button color="primary" variant="contained" onClick={handleClick}>EDIT</Button>
                <div>
                    <Typography className={classes.title} variant="body1">{degree.DegreeName}</Typography>
                </div>
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