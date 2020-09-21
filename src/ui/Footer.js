import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    }
}));

export default (props) => {
    const classes = useStyles();

    return <footer className={classes.footer}><img className={classes.adornment} alt='black decorative slash' src={footerAdornment} /></footer>
}