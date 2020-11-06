import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import { IconButton, Icon } from '@material-ui/core';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    }
  },
  itemContainer: {
    maxWidth: '40em'
  }
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column'>
      {/* iOS/Android App Development container*/}
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
              component={Link} to='/customsoftware'
              onClick={props.setSelectedIndex(1)}
            >
              <img src={backArrow} alt='Back to Custom Software Development Page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>iOS/Android App Development</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Whether you want an app for your customers, employees, or yourself,
              we can build cross-platform native solutions for any part of your business process.
              This opens you up to a whole new world of possibilities by taking advantage of
              phone features like the camera, GPS, push notifications, and more.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        {/* forward arrow container*/}
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link} to='/websites'
              onClick={props.setSelectedIndex(3)}
            >
              <img src={forwardArrow} alt='Forward to Website Development' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* bottom half container*/}
      <Grid item container direction='row' justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '20em' }}
      >
        {/* integration container*/}
        <Grid item container direction='column' md>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h4'>Integration</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Our technology enables an innate interconnection between web
              and mobile applications, putting everything you need right in one convenient place.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactions,
              and develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        {/* mobile animation container*/}
        <Grid item md>
          <Lottie options={defaultOptions}/>
        </Grid>
        {/* simultaneous platform container*/}
        <Grid item container direction='column' md>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h4'>Simultaneous Platform Support</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MobileApps;