import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,0,102, 1)',
  },
  signin: {
    color: 'rgba(50,150,50, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    width: 600,
  }
  
}));