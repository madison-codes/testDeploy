import * as React from 'react';
import Logo from '../components/icons/Logo';
import Button from 'material-ui/Button';
import Link from "gatsby-link";

export default () => {
    return (
        <div className="welcome-page">
            <Logo styleHandle="main-logo" height={"200px"} width={"200px"} />
            <div className="home-title-holders">
                <h1>IronCore Labs</h1>
                <h2>Secure your application at its core.</h2>
                <Link to="/docs/guides/architecture">
                    <Button raised>Get Started</Button>
                </Link>
            </div>
        </div>
    );
};