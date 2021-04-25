import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'block',
    backgroundColor: '#ffffff',
    //justifyContent: 'space-evenly',
  },
  details: {
    display: 'table',
    //justifyContent: 'space-between',
    margin: '10px',
  },
  id: {
    fontSize: '13px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: '15px',
  },
  title1: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  credits: {
    //padding: '0 100px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  details2: {
    padding: '0 16px 8px 16px',
    display: 'table',
    justifyContent: 'space-between',
  },
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    maxWidth: "1000px",
  },
  closeicon: {
    position: 'absolute',
    right: '0px',
    padding: '0 10px',
  },
}));