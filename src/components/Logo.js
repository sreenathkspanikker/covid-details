import React from 'react';
import { Image } from 'react-bootstrap';
import ImgLogo from '../assets/images/logo_covid_tracker.svg';

export const Logo = () => (
    <a href="/" className='app-logo'>
        <Image src={ImgLogo} alt="covid_logo" fluid />
        <span>Covid-19 Tracker</span>
    </a>
)