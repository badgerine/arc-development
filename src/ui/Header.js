import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/logo.svg';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {
        height: '7em'
    }
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

export default function Header(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' >
                    <Toolbar disableGutters>
                        <img className={classes.logo} alt="company logo" src={logo}/>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}