import React from 'react';
import './ContactDetails.scss';

interface IContactDetailsProps {
    url : string;
    animationDelay ?: string;
}

const ContactDetails : React.FC<IContactDetailsProps> = props => {
    return (
        <div className={`contact-details item left`}>
            <div className={`details-text`}>
                <a href={props.url} target='_blank' rel="noreferrer">
                    {props.children}
                </a>
            </div>
            <div className={`details-cover`} style={{ animationDelay: props.animationDelay }}></div>
        </div>
    );
}

export default ContactDetails;