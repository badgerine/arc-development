import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import background from '../assets/background.jpg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='row'>
      {/*---layout container - contact form---*/}
      <Grid item container direction='column'
        style={{ marginTop: matchesSM ? '1em' : '2em' }}
        lg={3}
      >
        <Grid item>
          <Typography variant='h2' gutterBottom
            align={matchesMD ? 'center' : undefined}
            style={{ lineHeight: 1 }}
          >
            Contact Us
          </Typography>
          <Typography variant='body1' style={{ color: theme.palette.common.arcBlue }}>
            We're waiting.
          </Typography>
        </Grid>
      </Grid>
      {/*---layout container - call to action---*/}
      <Grid item container className={classes.background} lg={9}>

      </Grid>
    </Grid>
  )
}

export default Contact;