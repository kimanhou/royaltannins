import React from 'react';
import './EventButton.scss';

interface IEventButtonProps {
    text : string;
    onClick : React.MouseEventHandler<HTMLDivElement>;
    disabled : boolean;
}

const EventButton : React.FC<IEventButtonProps> = props => {
    const diabledClassName = props.disabled ? 'disabled' : '';

    return (
        <div className={`event-button-container-container ${diabledClassName}`}>
            <div className='event-button-container' onClick={props.onClick}>
                <button className='event-button-before'>{props.text}</button>
                <button className='event-button-after'>{props.text}</button>
            </div>
        </div>
    );
}

export default EventButton;