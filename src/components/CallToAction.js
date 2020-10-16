import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonArrow from '../ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  }
}))

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.<br />Revolutionay Results.
          </Typography>
            <Typography variant='subtitle2'>
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
    </Grid>)
}

export default CallToAction;