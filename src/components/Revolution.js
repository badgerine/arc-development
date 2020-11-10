import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import visionIcon from '../assets/vision.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
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
    maxWidth: '35em'
  }
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const technologyOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column'>
      {/*----layout container - the revolution title----*/}
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em' }}>
        <Typography variant='h2' gutterBottom align={matchesSM ? 'center' : undefined}>
          The Revolution
        </Typography>
      </Grid>
      {/*----layout container - vision block----*/}
      <Grid item container direction='row' className={classes.rowContainer} justify='center' alignItems='center'>
        <Grid item >
          <img src={visionIcon} alt='mountain through binoculars' />
        </Grid>
        <Grid item>
          <Grid container direction='column' className={classes.itemContainer}>
            <Grid item>
              <Typography variant='h4' gutterBottom align={matchesSM ? 'center' : 'right'}>
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : 'right'}>
                The rise of computers, and subsequently the Internet, has completely altered every aspect of human life.
                This has increased our comfort, broadened our connections, and reshaped how we view the world.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : 'right'}>
                What once was confined to huge rooms and teams of engineers now resides in every single one of our hands.
                Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : 'right'}>
                We want to help businesses capitalize on the latest and greatest technology.
                The best way to predict the future is to be the one building it,
                and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : 'right'}>
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to thrive in this new frontier.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : 'right'}>
                We see a future where every individual has personalized software custom tailored to their lifestyle,
                culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----layout container - technology block----*/}
      <Grid itemcontainer direction='row' className={classes.rowContainer} justify='center' alignItems='center'>
        <Grid item>
          <Grid container direction='column' className={classes.itemContainer}>
            <Grid item>
              <Typography variant='h4' gutterBottom align={matchesSM ? 'center' : undefined}>
                Technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                In 2013, Facebook invented a new way of building websites.
                This new system, React.js, completely revolutionizes the process and practice of website development.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                Instead of chaining together long individual pages, like traditional websites,
                React websites are built with little chunks of code called components.
                These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                Two years later they shocked the world by releasing a similar system,
                React Native, for producing iOS and Android apps.
                Instead of having to master two completely separate development platforms,
                you can leverage the knowledge you already possessed from building websites and reapply it directly!
                This was a huge leap forward.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                This technology is now being used by companies like AirBnB, Microsoft, Netflix,
                Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                Developers have since built on top of these systems by automating project setup and deployment,
                allowing creators to focus as much as possible on their work itself.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                These technical advancements translate into savings by significantly reducing the workload and
                streamlining the workflow for developing new pieces of software,
                while also lowering the barrier to entry for mobile app development.
              </Typography>
              <Typography variant='body1' paragraph align={matchesSM ? 'center' : undefined}>
                This puts personalization in your pocket — faster, better, and more affordable than ever before.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <Lottie options={technologyOptions} style={{ maxHeight: 260, maxWidth: 280 }}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Revolution;