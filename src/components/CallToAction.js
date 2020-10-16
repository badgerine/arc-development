import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonArrow from '../ui/ButtonArrow';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    weight: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: '1.5rem'
  }
}))

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container alignItems='center' className={classes.background} justify='space-between'>
      <Grid item style={{marginLeft: '5em'}}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.<br />Revolutionay Results.
            </Typography>
            <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>
              Take advantage of the 21st century.
            </Typography>
            <Grid container item>
              <Button variant='outlined' className={classes.learnButton}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginRight: '5em'}}>
        <Button variant='contained' className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>)
}

export default CallToAction;