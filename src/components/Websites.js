import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import { IconButton } from '@material-ui/core';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analyticsIcon from '../assets/analytics.svg';
import ecommerceIcon from '../assets/ecommerce.svg';
import outreachIcon from '../assets/outreach.svg';
import seoIcon from '../assets/seo.svg';
import CallToAction from './CallToAction';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    // paddingRight: '5em',
    marginBottom: '15em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    }
  },
  itemContainer: {
    maxWidth: '45em'
  },
  paragraphContainer: {
    maxWidth: '30em',
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginLeft: '0',
    }
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      {/*1st layout container - website development*/}
      <Grid item container direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        {/* back arrow container*/}
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link} to='/mobileapps'
              onClick={props.setSelectedIndex(2)}
            >
              <img src={backArrow} alt='Back to iOS/Android Apps Development Page' />
            </IconButton>
          </Grid>
        </Hidden>
        {/*website dev intro */}
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>Website Development</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Having a website is a necessity in today’s business world. They give you one central,
              public location to let people know who you are, what you do, and why you’re the best at it.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              From simply having your hours posted to having a full fledged online store,
              making yourself as accessible as possible to users online drives growth and
              enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        {/* forward arrow container*/}
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link} to='/services'
              onClick={props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt='Return to Services Page' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*2nd layout container - analytics */}
      <Grid item container direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
      >
        <Grid item >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align={matchesSM ? 'center': undefined}>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt='graph with magnifying glass' src={analyticsIcon} style={{ marginLeft: '-2.75em' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} style={{marginLeft: 0}}>
          <Typography variant='body1' paragraph>
            Knowledge is power, and data is 21st Century gold.
            Analyzing this data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/*3rd layout container - e-commerce */}
      <Grid item container direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        alignItems='center'
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align='center'>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt='world globe outline' src={ecommerceIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} >
          <Typography variant='body1' paragraph>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography variant='body1' paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/*4th layout container - outreach */}
      <Grid item container direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
      >
        <Grid item >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center': undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt='megaphone' src={outreachIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} >
          <Typography variant='body1' paragraph>
            Draw people in with a dazzling website.
            Showing off your products online is a great way to help customers
            decide what’s right for them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/*5th layout container - seo */}
      <Grid item container direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        justify={matchesSM ? 'center' : 'flex-end'}
      >
        <Grid item>
          <Grid container direction='column' >
            <Grid item>
              <Typography variant='h4' align='center'>
                Search Engine<br/>Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt='pc monitor on podium' src={seoIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer} >
          <Typography variant='body1' paragraph >
            How often have you ever been to the second page of Google results?
            </Typography>
          <Typography variant='body1' paragraph >
            If you’re like us, probably never.
            </Typography>
          <Typography variant='body1' paragraph >
            Customers don’t go there either, so we make sure your website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      {/*6th layout container - call to action*/}
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default Websites;