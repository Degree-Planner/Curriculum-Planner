import React, { Component } from 'react';
import { Grid, CircularProgress, Container, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";

import Term from './Term'

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#000000',
  },
  actionDiv: {
    textAlign: 'center',
  },
  heading: {
    color: '#ffffff',
    fontSize: '30px',
  },
  course: {
    backgroundColor: '#ff0000',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  course1: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  course2: {
    backgroundColor: '#00ff00',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  course3: {
    backgroundColor: '#ff6666',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  course4: {
    backgroundColor: '#90EE90',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    background: '#ffffff',
    border: '5px solid rgba(0, 0, 128, 1)',
    //boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 1)',
    padding: '10px',
  },
});

class GridCourses extends React.Component {
  constructor(DegreeCourses) {
    super(DegreeCourses);
    this.state = {
      hovered: false,
      courses: DegreeCourses.courses,
      course: 'Undefined'
    };

    this.onMouseEnter = this.onMouseEnter.bind(this)
  };

  onMouseEnter = (e, course) => {
    this.setState({ hovered: true, course: course });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  render() {
      const { classes } = this.props;
      const hovered = this.state.hovered;
      const red = classes.course;
      const white = classes.course1;
      const green = classes.course2;
      const lightRed = classes.course3;
      const lightGreen = classes.course4;
      const courses = this.state.courses
      const course = this.state.course

      var terms = (courses.map(Course => Course.Term))
      terms = terms.filter((v, i, a) => a.indexOf(v) === i); 
      terms.sort()

      //
  
      return (
        !courses.length ? <CircularProgress /> : (
          <div className={classes.root}>
          <Grid container>
            {terms.map((term) => (
              <Grid container alignItems={'center'} direction={'column'} item xs={3} sm={3} md={3} lg={3} xl={3}>
                <Container align={'center'} className={classes.paper}>
                  <Typography className={classes.heading} variant="h3">Term {term}</Typography>
                </Container>
                <Term term={term} courses={courses} hovered={hovered} course={course} red={red} lightRed={lightRed} white={white} green={green} lightGreen={lightGreen} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
              </Grid>
            ))}
          </Grid>
          </div>
        )
      );
  };
}

export default withStyles(styles)(GridCourses);