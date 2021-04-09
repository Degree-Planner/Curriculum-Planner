import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  input: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 30,
    marginTop: 30,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '700px',
    },
  },
  iconButton: {
    marginBottom: 10,
  },
  
}));