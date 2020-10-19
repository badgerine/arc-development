import { createMuiTheme } from '@material-ui/core/styles';

const customBlue = '#0b72b9';
const customOrange = '#ffba60';
const customGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: customBlue,
      arcOrange: customOrange,
      arcGrey: customGrey
    },
    primary: {
      main: customBlue,
    },
    secondary: {
      main: customOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      marginRight: '25px',
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    },
    h2: {
      // fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: customBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: customBlue
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: customBlue,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.25rem',
      color: customGrey,
      fontWeight: 300
    },
    subtitle2: {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 300
    },
    body1: {
      fontSize: '1.25rem',
      color: customGrey,
      fontWeight: 300
    },
    learnButton: {
      color: customBlue,
      borderColor: customBlue,
      borderWidth: 2,
      borderRadius: 50,
      textTransform: 'none',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    }
  }
});