import React, { Component } from 'react';
import { Grid, CircularProgress, Container, Typography, Fade, Paper } from '@material-ui/core';
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
    color: '#000080',
    padding: "0px",
  },
  course: {
    backgroundColor: '#ff0000',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  course1: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  course2: {
    backgroundColor: '#00ff00',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  course3: {
    backgroundColor: '#ff6666',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  course4: {
    backgroundColor: '#90EE90',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  course5: {
    backgroundColor: '#FFD700',
    border: '1px solid rgba(0, 0, 0, 0.3)'
  },
  container: {
    background: '#ffffff',
    border: '5px solid rgba(0, 0, 128, 1)',
    //boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 1)',
    padding: '10px',
  },
  credits: {
    backgroundColor: '#ffffff',
    border: '2px solid rgba(0, 0, 128, 1)',
    padding: '0 45px',
    fontWeight: 'bold',
  },
  paper: {
    padding: '0 0 20px',
    
    //color: '#ffffff',
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
      const lightRed = classes.course3;
      const lightGreen = classes.course4;
      const yellow = classes.course5;
      const courses = this.state.courses
      const course = this.state.course

      const TermCredits = (term) => {
        var result = 0
        courses.map((currentcourse) => result += currentcourse.Term === term ? currentcourse.CreditHours : 0)
        return result
      }

      var terms = (courses.map(Course => Course.Term))
      terms = terms.filter((v, i, a) => a.indexOf(v) === i); 
      terms.sort()
  
      return (
        !courses.length ? <CircularProgress /> : (
          <div>
            <Fade in>
          <Grid container alignItems="stretch" spacing={2}>
            {terms.map((term) => (
              <Container className={classes.container}>
                <Typography className={classes.heading} variant="h3" align="center">Term {term}</Typography>
                <Container align={'right'} className={classes.paper}>
                  <Typography className={classes.credits}>{TermCredits(term)} Credit Hours</Typography>
                </Container>
                <Term term={term} courses={courses} hovered={hovered} course={course} red={red} lightRed={lightRed} white={white} green={green} lightGreen={lightGreen} yellow={yellow} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
              <br></br>
              </Container>
            ))}
          </Grid>
          </Fade>
          </div>
        )
      );
  };
}

export default withStyles(styles)(Courses);