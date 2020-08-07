import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

import logo from '../assets/logo.svg';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {
        height: '8em'
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        margingLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        height: '45px',
    },
    menu: {
        background: theme.palette.common.arcBlue,
        color: 'white',
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
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
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5);
        }
    }, [value])

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleCloseMenu = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(index);
    }

    const menuOptions = [
        { name: 'Services', link: '/services' },
        { name: 'Custom Software Development', link: '/customsoftware' },
        { name: 'Mobile App Development', link: '/mobileapps' },
        { name: 'Website Development', link: '/websites' }];

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' >
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' className={classes.logoContainer} onClick={() => setValue(0)}>
                            <img className={classes.logo} alt="company logo" src={logo} />
                        </Button>

                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to='/'
                                label="Home" />
                            <Tab
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup={anchorEl ? 'true' : undefined}
                                className={classes.tab}
                                component={Link}
                                onMouseOver={event => handleClickMenu(event)}
                                to='/services'
                                label="Services" />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to='/revolution'
                                label="The Revolution" />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to='/about'
                                label="About Us" />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to='/contact'
                                label="Contact Us" />
                        </Tabs>
                        <Button variant="contained" color='secondary' className={classes.button}>
                            Free Estimate
                        </Button>
                        <Menu
                            id='simple-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseMenu}
                            classes={{ paper: classes.menu }}
                            elevation={0}
                            MenuListProps={{ onMouseLeave: handleCloseMenu }}>

                            {menuOptions.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    classes={{ root: classes.menuItem }}
                                    onClick={(event) => {
                                        handleMenuItemClick(event, index);
                                        handleCloseMenu();
                                        setValue(1)
                                    }}
                                    selected={value === 1 && index === selectedIndex}
                                    component={Link}
                                    to={item.link} >{item.name}</MenuItem>
                            ))}

                            {/* <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleCloseMenu(); setValue(1) }} component={Link} to='/services' >Services</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleCloseMenu(); setValue(1) }} component={Link} to='/customsoftware' >Custom Software Development</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleCloseMenu(); setValue(1) }} component={Link} to='/mobileapps' >Mobile App Development</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleCloseMenu(); setValue(1) }} component={Link} to='/websites' >Website Development</MenuItem> */}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}