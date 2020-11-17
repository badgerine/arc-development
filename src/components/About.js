import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import historyIcon from '../assets/history.svg'

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    }
  },
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4
  }
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      {/*layout container - title: about us*/}
      <Grid item
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? '1em' : '2em' }}
      >
        <Typography variant='h2' gutterBottom align={matchesSM ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>

      {/*----layout container - vision block----*/}
      <Grid item container justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Typography variant='h4' align='center' className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible.
          Arc Development will use that principle to provide fast, modern, inexpensive,
          and aesthetic software to the Midwest and beyond.
        </Typography>
      </Grid>
      {/*----layout container - history block----*/}
      <Grid item container direction={matchesMD ? 'column' : 'row'} alignItems='center'
        justify='space-around'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item>
          <Grid item container direction='column' lg style={{ maxWidth: '35em' }}>
            <Grid item>
              <Typography variant='h4' gutterBottom align={matchesMD ? 'center' : undefined}>
                History
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant='body1' paragraph
                align={matchesMD ? 'center' : undefined}
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                Founded in 2019, we’re ready to get our hands on the world’s business problems.
              </Typography>
              <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                It all started with one question: Why aren’t all businesses using available technology?
                There are many different answers to that question: economic barriers, social barriers,
                educational barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up infinite worlds of possibility.
                Things that have always been done by hand can now be done digitally and automatically,
                and completely new methods of interaction are created daily.
                Taking full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                All this change can be a lot to keep up with, and that’s where we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid item container justify='center' lg>
            <img src={historyIcon} alt='quill writing in open notebook'
              style={{
                marginBottom: matchesMD ? '5em' : 0,
                maxHeight: '22em'
              }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default About;