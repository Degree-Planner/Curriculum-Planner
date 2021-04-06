import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    padding: '150px 20px',
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
  container: {
    padding: '30px',
    maxWidth: '1000px',
  },
}));