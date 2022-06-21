import React from 'react';
import { useNavigate } from 'react-router';
import './Footer.scss';

const Footer : React.FC = props => {
    const navigate = useNavigate();
    const onGlassOfWineClick = () => {
        const path = "/log-in";
        navigate(path);
    }

    return (
        <footer className={`flex-column`}>
            <div className='flex-row'>
                &copy; 2022 <div className='wine-glass' onClick={onGlassOfWineClick}>🍷</div>
            </div>
        </footer>
    );
}

export default Footer;