import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import ButtonArrow from '../ui/ButtonArrow';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    weight: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: '1.5rem',
    marginLeft: '2em',
    marginRight: '5em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    }
  }
}))

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      className={classes.background}
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}

    >
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit' }}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.<br />Revolutionay Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st century.
            </Typography>
            <Grid container item justify={matchesSM ? 'center' : undefined}>
              <Button
                variant='outlined'
                className={classes.learnButton}
                component={Link} to='/revolution'
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          className={classes.estimateButton}
          component={Link} to='/estimate'
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>)
}

export default CallToAction;