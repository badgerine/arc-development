import { createMuiTheme } from '@material-ui/core/styles';

const customBlue = '#0b72b9';
const customOrange = '#ffba60';

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: customBlue,
            arcOrange: customOrange
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
        }
    }
});