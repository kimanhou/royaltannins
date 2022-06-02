import React from 'react';
import './SocialLink.scss';

interface ISocialLinkProps {
    url : string;
    icon : string;
}

const SocialLink : React.FC<ISocialLinkProps> = props => {
    return (
        <div className={`social-link`}>
            <a href={props.url} target='_blank' rel="noreferrer">
                <img src={props.icon} alt='icon'/>
            </a>
        </div>
        
    );
}

export default SocialLink;