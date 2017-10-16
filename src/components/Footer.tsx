import * as React from 'react';
import Logo from './icons/Logo';

export default () => {
    return (
        <footer>
            <div className="footer-link-container">
                <ul className="footer-link-list">
                    <h3>Learn</h3>
                    <li><a href="/">Docs</a></li>
                    <li><a href="https://blog.ironcorelabs.com/">Blog</a></li>
                    <li><a href="https://github.com/IronCoreLabs">GitHub</a></li>
                </ul>

                <ul className="footer-link-list">
                    <h3>Stay Connected</h3>
                    <li><a href="https://ironcorelabs.com/#maillist">Newsletter</a></li>
                    <li><a href="https://www.facebook.com/ironcorelabs/">Facebook</a></li>
                    <li><a href="https://linkedin.com/company/ironcore-labs">LinkedIn</a></li>
                    <li><a href="https://twitter.com/ironcorelabs">Twitter</a></li>
                </ul>

                <ul className="footer-link-list">
                    <h3>Support</h3>
                    <li><a href="https://ironcorelabs.com/about/#contact">Contact Us</a></li>
                </ul>

            </div>
            <Logo styleHandle="logo-footer" height="500px" width="500px" />
        </footer>
    );
};