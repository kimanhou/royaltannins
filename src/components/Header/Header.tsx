import React from 'react';
import './Header.scss';
import logo from './../../images/rt-logo-1.jpeg';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router';

const Header : React.FC = props => {
    const navigate = useNavigate();
    const goToHome = () => {
        const path = "/";
        navigate(path);
    }
    return (
        <header onClick={goToHome}>
            <img src={logo} className={`logo-image`} alt={'Royal Tannins logo'} />

            <Navigation />
        </header>
    );
}

export default Header;