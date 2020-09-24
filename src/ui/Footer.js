import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} to='/'
                onClick={() => { props.setValue(0) }}>Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} to='/services'
                onClick={() => { props.setValue(1); props.setSelectedIndex(0) }} >Services</Grid>
              <Grid item className={classes.link} component={Link} to='/customsoftware'
                onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} >Custom Software Development</Grid>
              <Grid item className={classes.link} component={Link} to='/mobileapps'
                onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} >Mobile App Development</Grid>
              <Grid item className={classes.link} component={Link} to='/websites'
                onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} >Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} to='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(0) }} >The Revolution</Grid>
              <Grid item className={classes.link} component={Link} to='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(1) }} >Vision</Grid>
              <Grid item className={classes.link} component={Link} to='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(2) }} >Technology</Grid>
              <Grid item className={classes.link} component={Link} to='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(3) }} >Process</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} to='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >About Us</Grid>
              <Grid item className={classes.link} component={Link} to='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >History</Grid>
              <Grid item className={classes.link} component={Link} to='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >Team</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} to='/contact'
                onClick={() => { props.setValue(4); props.setSelectedIndex() }} >Contact Us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img className={classes.adornment} alt='black decorative slash' src={footerAdornment} />
    </footer>)
}