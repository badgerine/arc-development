import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Dialog, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
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
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
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
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225
    }
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', backgroundColor: '' })

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const onChangeHandler = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        const emailValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        valid = emailValidator.test(event.target.value);
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        const phoneValidator = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        valid = phoneValidator.test(event.target.value);
        if (!valid) {
          setPhoneHelper('Invalid phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  }

  const onConfirmHandler = () => {
    setLoading(true);
    axios.get('https://us-central1-material-ui-course-5c72f.cloudfunctions.net/sendMail', {
      params: {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    })
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

        setAlert({ open: true, message: 'Message sent successfully.', backgroundColor: '#4BB543' });
        console.log(res)
      })
      .catch(
        err => {
          setLoading(false);
          setAlert({ open: true, message: 'Something went wrong, please try again.', backgroundColor: '#FF3232' })
          console.log(err)
        }
      );
  }

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt='airplane' style={{ marginLeft: '1rem' }} />
    </React.Fragment>
  )

  return (
    <Grid container direction='row'>
      {/*---layout container - contact form---*/}
      <Grid item container lg={4} xl={3} justify='center' alignItems='center'
        style={{ marginBottom: matchesMD ? '5em' : 0, marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0 }}
      >
        <Grid item direction='column' >
          {/*---contact form - title and intro---*/}
          <Grid item>
            <Typography variant='h2' gutterBottom
              style={{ lineHeight: 1 }}
              align={matchesMD ? 'center' : undefined}
            >
              Contact Us
              </Typography>
            <Typography variant='body1'
              style={{ color: theme.palette.common.arcBlue }}
              align={matchesMD ? 'center' : undefined}
            >
              We're waiting.
              </Typography>
          </Grid>
          {/*---contact form - contact info---*/}
          <Grid item container style={{ marginTop: '2em' }}>
            <Grid item>
              <img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ color: theme.palette.common.arcBlue, fontSize: '1rem' }}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href='tel:5555555555'>(555) 555-5555</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: '2em' }}>
            <Grid item>
              <img src={emailIcon} alt='envelope' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ color: theme.palette.common.arcBlue, fontSize: '1rem' }}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href='mailto:maker@gmail.com'>maker@gmail.com</a>
              </Typography>
            </Grid>
          </Grid>
          {/*---contact form - capture user info and message---*/}
          <Grid item container direction='column'>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={event => setName(event.target.value)} />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                id='email'
                error={emailHelper.length > 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChangeHandler} />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                id='phone'
                error={phoneHelper.length > 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChangeHandler} />
            </Grid>
          </Grid>
          {/*---capture user message---*/}
          <Grid item style={{ width: '20em' }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              id='message'
              placeholder='Tell us more about your project.'
              fullWidth
              multiline
              rows={10}
              onChange={event => setMessage(event.target.value)}
              className={classes.message}
            />
          </Grid>
          <Grid item container direction='row' justify='flex-end' style={{ marginTop: '2em' }}>
            <Button variant='contained'
              disabled={name.length === 0 || message.length === 0 ||
                phone.length === 0 || email.length === 0 ||
                phoneHelper.length !== 0 || emailHelper.length !== 0}
              className={classes.sendButton}
              style={{ marginRight: 0 }}
              onClick={() => setOpen(true)}
            >
              {buttonContents}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/*---Dialog container---*/}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesSM ? true : false}
        style={{
          zIndex: 1302,
        }}
        PaperProps={{
          style: {
            overflow: 'hidden',
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS ? '0' : matchesSM ? '5em' : matchesMD ? '10em' : '20em',
            paddingRight: matchesXS ? '0' : matchesSM ? '5em' : matchesMD ? '10em' : '20em'
          }
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align='center'>Confirm Message</Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={event => setName(event.target.value)} />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                id='email'
                error={emailHelper.length > 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChangeHandler} />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                id='phone'
                error={phoneHelper.length > 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChangeHandler} />
            </Grid>
            <Grid item style={{ width: matchesSM ? '100%' : '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                id='message'
                fullWidth
                multiline
                rows={10}
                onChange={event => setMessage(event.target.value)}
                className={classes.message}
              />
            </Grid>
            <Grid item container direction={matchesSM ? 'column' : 'row'} style={{ marginTop: '2em' }} alignItems='center'>
              <Grid item>
                <Button color='primary'
                  style={{ fontWeight: 300 }}
                  onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained'
                  disabled={name.length === 0 || message.length === 0 ||
                    phone.length === 0 || email.length === 0 ||
                    phoneHelper.length !== 0 || emailHelper.length !== 0}
                  className={classes.sendButton}
                  style={{ marginRight: 0 }}
                  onClick={onConfirmHandler}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/*---Snackbar---*/}
      <Snackbar open={alert.open} message={alert.message} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
        ContentProps={
          {
            style: {
              backgroundColor: alert.backgroundColor,
            }
          }} />
      {/*---layout container - call to action---*/}
      <Grid item container alignItems='center' justify={matchesMD ? 'center' : undefined} lg={8} xl={9}
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
      >
        <Grid item style={{ marginLeft: matchesMD ? 0 : '3em', textAlign: matchesMD ? 'center' : 'inherit' }}>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Simple Software.<br />Revolutionay Results.
              </Typography>
              <Typography variant='subtitle2' align={matchesMD ? 'center' : undefined} style={{ fontSize: '1.5rem' }}>
                Take advantage of the 21st century.
              </Typography>
              <Grid container item justify={matchesMD ? 'center' : undefined}>
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