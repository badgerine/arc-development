import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import historyIcon from '../assets/history.svg'
import founder from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import CallToAction from './CallToAction';

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
  },
  avatar: {
    width: '25em',
    height: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300
    }
  }
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      {/*layout container - title: about us*/}
      <Grid item
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? '1em' : '2em' }}
      >
        <Typography variant='h2' gutterBottom align={matchesMD ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>

      {/*----layout container - mission statement----*/}
      <Grid item container justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography variant='h4' align='center' className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible.
          Arc Development will use that principle to provide fast, modern, inexpensive,
          and aesthetic software to the Midwest and beyond.
        </Typography>
      </Grid>
      {/*----layout container - history block----*/}
      <Grid item container justify='space-around'
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
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
        <Grid item>
          <Grid item container justify='center' lg>
            <img src={historyIcon} alt='quill writing in open notebook'
              style={{ maxHeight: matchesMD ? 200 : '22em' }} />
          </Grid>
        </Grid>
      </Grid>
      {/*----layout container - team block----*/}
      <Grid item container direction='column' alignItems='center'
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        {/*----team block- founder and avatar----*/}
        <Grid item>
          <Typography variant='h4' align='center'>Team</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Zachary Reece, Founder
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item >
          <Avatar alt='founder' src={founder} className={classes.avatar} />
        </Grid>
        {/*----team block - endorsements----*/}
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item direction='column' style={{ maxWidth: '45em', padding: '1.25em' }} lg>
              <Typography variant='body1' paragraph align='center'>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning — learning about computers,
                learning mathematics and philosophy, studying design, always just learning.
              </Typography>
              <Typography variant='body1' paragraph align='center'>
                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
            </Grid>
          </Hidden>
          <Grid item container lg direction='column'
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img alt='year book article' src={yearbook} style={{maxWidth: matchesMD ? 300 : undefined }}/>
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item direction='column' style={{ maxWidth: '45em', padding: '1.25em' }} lg>
              <Typography variant='body1' paragraph align='center'>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning — learning about computers,
                learning mathematics and philosophy, studying design, always just learning.
              </Typography>
              <Typography variant='body1' paragraph align='center'>
                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
            </Typography>
            </Grid>
          </Hidden>
          <Grid item container direction='column' lg alignItems={matchesMD ? 'center' : 'flex-end'}>
            <Grid item>
              <img alt='sleeping puppy' src={puppy}  style={{maxWidth: matchesMD ? 300 : undefined }}/>
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default About;