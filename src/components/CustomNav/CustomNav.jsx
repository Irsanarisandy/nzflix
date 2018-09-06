import { AppBar, Toolbar } from '@material-ui/core';
import { Menu, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import styles from './styles';
import logo from '../../assets/logo.png';

const CustomNav = () => (
    <AppBar position="static" style={styles.nav}>
        <Toolbar>
            <img src={logo} alt="logo" />
            <div style={styles.right}>
                <Notifications />
                <Search />
                <Menu />
            </div>
        </Toolbar>
    </AppBar>
);

export default CustomNav;
