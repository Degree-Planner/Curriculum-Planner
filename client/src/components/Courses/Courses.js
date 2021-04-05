import React, { Component } from 'react';
import { Grid, CircularProgress, Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";

import Term from './Term'

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  heading: {
    color: '#ffffff',
  },
  course: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#ff0000',
  },
  course1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  course2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#00ff00',
  },
});

class Courses extends React.Component {
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
      const courses = this.state.courses
      const course = this.state.course

      var terms = (courses.map(Course => Course.Term))
      terms = terms.filter((v, i, a) => a.indexOf(v) === i); 
  
      return (
        !courses.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={2}>
            {terms.map((term) => (
              <Container>
                <Typography className={classes.heading} variant="h3" align="center">Term {term}</Typography>
                <Term term={term} courses={courses} hovered={hovered} course={course} red={red} white={white} green={green} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
              <br></br>
              </Container>
            ))}
          </Grid>
        )
      );
  };
}

export default withStyles(styles)(Courses);