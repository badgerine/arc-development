import React, { useState } from 'react';
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
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from '../ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
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
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  message: {
    marginTop: '5em',
    borderRadius: 5,
    border: `2px solid ${theme.palette.common.arcBlue}`
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.arcOrange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='row'>
      {/*---layout container - contact form---*/}
      <Grid item container direction='column' justify='center'
        style={{ marginTop: matchesSM ? '1em' : '2em' }}
        lg={3}
      >
        {/*---contact form - title and intro---*/}
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
        {/*---contact form - contact info---*/}
        <Grid item container >
          <Grid item>
            <img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
          </Grid>
          <Grid item>
            <Typography variant='body1' style={{ color: theme.palette.common.arcBlue, fontSize: '1rem' }}>
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container >
          <Grid item>
            <img src={emailIcon} alt='envelope' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
          </Grid>
          <Grid item>
            <Typography variant='body1' style={{ color: theme.palette.common.arcBlue, fontSize: '1rem' }}>
              maker@gmail.com
            </Typography>
          </Grid>
        </Grid>
        {/*---contact form - capture user info and message---*/}
        <Grid item container>
          <Grid item style={{maxWidth: '20em'}}>
            <Grid item>
              <TextField label='Name' id='name' value={name} onChange={event => setName(event.target.value)} />
            </Grid>
            <Grid item>
              <TextField label='Email' id='email' value={email} onChange={event => setEmail(event.target.value)} />
            </Grid>
            <Grid item>
              <TextField label='Phone' id='phone' value={phone} onChange={event => setPhone(event.target.value)} />
            </Grid>
          </Grid>
          {/*---capture user message---*/}
          <Grid item style={{maxWidth: '20em'}}>
            <TextField
              InputProps={{disableUnderline: true}}
              value={message}
              id='message'
              multiline
              rows={10}
              onChange={event => setMessage(event.target.value)}
              className={classes.message}
            />
          </Grid>
          <Grid item>
            <Button variant='contained'className={classes.sendButton}>
              Send Message
              <img src={airplane} alt='airplane' style={{marginLeft: '1rem'}}/>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/*---layout container - call to action---*/}
      <Grid item container className={classes.background} alignItems='center' lg={9}>
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
                  onClick={() => props.setValue(2)}
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
            onClick={() => { props.setValue(5) }}
          >
            Free Estimate
        </Button>
        </Grid>
      </Grid>
      {/* <Grid item container lg={9}>
        <CallToAction setValue={props.setValue}/>
      </Grid> */}
    </Grid>
  )
}

export default Contact;