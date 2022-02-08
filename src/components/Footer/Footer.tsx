import React from 'react';
import './Footer.scss';

const Footer : React.FC = props => {
    return (
        <footer className={`flex-column`}>
            &copy; 2022
        </footer>
    );
}

export default Footer;