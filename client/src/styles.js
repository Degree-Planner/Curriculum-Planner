import { makeStyles } from '@material-ui/core/styles';
import background from "./HomePageGradient.png";

export default makeStyles(() => ({
  appBar: {
    padding: '150px 20px',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: '300px 100px',
    width: '1440px',
  },
  heading: {
    color: 'rgba(0,0,102, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));