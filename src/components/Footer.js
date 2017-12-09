/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => (
    <div>
        <footer>
            <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/news">Sign Up For News</NavLink></li>
            </ul>
        </footer>
    </div>
);

export default Footer;