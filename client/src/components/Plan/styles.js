import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)',
  },
  heading: {
    color: '#000080',
    backgroundColor: '#ffffff',
  },
  image: {
    marginLeft: '15px',
  },
  paper: {
    background: '#000080',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    padding: '10px',
  },
  red: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
    display: 'inline',
    padding: '2px',
  },
  green: {
    backgroundColor: '#00ff00',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
    display: 'inline',
    padding: '2px',
  },
  yellow: {
    backgroundColor: '#FFD700',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
    display: 'inline',
    padding: '2px',
  },
  legend: {
    display: 'flex',
    padding: '5px',
    justifyContent: 'space-evenly',
  },
  box: {
    backgroundColor: '#ffffff',
  },
}));