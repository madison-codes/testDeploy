import * as React from 'react';
import Link from 'gatsby-link';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import LogoFull from './icons/LogoFull';

export default () => {
    return (
        <AppBar style={{ backgroundColor: "#212121"}}>
            <Toolbar>
                <Link to="/">
                    <LogoFull styleHandle="logo" width="300px"/>
                </Link>
            </Toolbar>
        </AppBar>
    );
};