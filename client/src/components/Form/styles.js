import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    color: 'rgba(0,0,102, 1)',
  },
  note: {
    color: 'rgba(0,0,102, 1)',
    fontSize: 12,
    fontStyle: 'italic'
  },
  formControl:{
    width: '98.5%',
    margin: theme.spacing(1),
    marginTop: 10,
    minWidth: 120,
  },
}));