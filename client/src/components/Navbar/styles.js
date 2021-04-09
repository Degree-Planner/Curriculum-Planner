import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: '#ffffff' ,
    height: '100px',
  },
  heading: {
    color: 'rgba(255,255,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'navy',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#ff5050',
    color:'white',
  },
  admin: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    color:'white',
    backgroundColor: '#3eb489',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));