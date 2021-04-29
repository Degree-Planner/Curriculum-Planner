import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    container: {
      marginBottom: 20,
    },
    title:{
      marginLeft: 30,
    },
    details:{
      marginTop: -5,
    },
    text:{
      marginTop: -10,
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative',
    },
    finish:{
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color: 'rgba(0,150,0, 1)',
      fontSize: 24,
    },
    finishPaper:{
      marginTop: 20,
      padding: 20
    },
    message:{
      color: 'rgba(0,0,102, 1)',
      fontSize: 12,
      fontStyle: 'italic',
      marginBottom: 20,
    },
    addedTitle:{
      color: 'rgba(0,0,102, 1)',
      fontSize: 20
    },
    delete: {
      color: 'white',
      backgroundColor: '#ff5050',
      height: 40,
      width: 85,
    },
    edit:{
      height: 40,
    }
  }));