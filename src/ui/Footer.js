import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import footerAdornment from '../assets/Footer_Adornment.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: '1302',
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em',
  }
}));

export default (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={2} direction='column'>
            <Grid item className={classes.link} component={Link} to='/'>Home</Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={2} direction='column'>
            <Grid item className={classes.link} component={Link} to='/services'>Services</Grid>
            <Grid item className={classes.link} component={Link} to='/customsoftware'>Custom Software Development</Grid>
            <Grid item className={classes.link} component={Link} to='/mobileapps'>Mobile App Development</Grid>
            <Grid item className={classes.link} component={Link} to='/websites'>Website Development</Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={2} direction='column'>
            <Grid item className={classes.link} component={Link} to='/revolution'>The Revolution</Grid>
            <Grid item className={classes.link} component={Link} to='/revolution'>Vision</Grid>
            <Grid item className={classes.link} component={Link} to='/revolution'>Technology</Grid>
            <Grid item className={classes.link} component={Link} to='/revolution'>Process</Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={2} direction='column'>
            <Grid item className={classes.link} component={Link} to='/about'>About Us</Grid>
            <Grid item className={classes.link} component={Link} to='/about'>History</Grid>
            <Grid item className={classes.link} component={Link} to='/about'>Team</Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={2} direction='column'>
            <Grid item className={classes.link} component={Link} to='/contact'>Contact Us</Grid>
          </Grid>
        </Grid>
      </Grid>
      <img className={classes.adornment} alt='black decorative slash' src={footerAdornment} />
    </footer>)
}