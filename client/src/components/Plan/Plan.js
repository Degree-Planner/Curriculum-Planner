import React, { useEffect } from 'react';
import { Paper, Grow, Slide, Tabs, Tab, Typography, Container, Box, AppBar, Card } from '@material-ui/core';
import { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Courses from '../Courses/Courses';
import GridCourses from '../GridCourses/GridCourses';
import GraphCourses from '../GraphCourses/GraphCourses';

import useStyles from './styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Plan = () => {
    const classes = useStyles();
    const degrees = useSelector((state) => state.degrees);
    const location = useLocation();
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(degrees)
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    
    return (
        !location.degree ? (
            <Redirect to="/csc530/dev/degrees"/>
        ) : (
            <Slide in>
                <Paper variant="outlined" className={classes.paper}>
                    <Box className={classes.box}>
                    <Typography className={classes.heading} variant="h2" indicatorColor="primary" align="center">{location.degree.DegreeName}</Typography>
                    <AppBar className={classes.appBar} position="static">
                    <Tabs centered value={value} onChange={handleChange}>
                        <Tab label="List" {...a11yProps(0)} />
                        <Tab label="Grid" {...a11yProps(1)} />
                        <Tab label="Graph" {...a11yProps(2)} />
                    </Tabs>
                    </AppBar>
                    </Box>
                    <br></br>
                    <Card className={classes.legend}>
                      <Paper className={classes.red}>Prerequisite</Paper>
                      <Paper className={classes.green}>Unblocked</Paper>
                      <Paper className={classes.yellow}>Corequisite</Paper>
                    </Card>
                    <TabPanel value={value} index={0}>
                    <Container className={classes.container}>
                        <Courses courses={location.degree.Courses}/>
                    </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Container className={classes.container}>
                      <GridCourses courses={location.degree.Courses}/>
                    </Container>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <Container className={classes.container}>
                      <GraphCourses courses={location.degree.Courses}/>
                    </Container>
                    </TabPanel>  
                </Paper>
        </Slide>
        )
    )
}

export default Plan;