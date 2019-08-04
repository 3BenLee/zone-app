import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6', // blue
    },
    secondary: {
      main: '#19857b', // turqouise
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff', // white
    },
  },
});

export default theme;
