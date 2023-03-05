import React from 'react';
import EventModel from '../../../model/EventModel';
import './EventContent.scss';

interface IEventContentProps {
    event : EventModel;
}

const EventContent : React.FC<IEventContentProps> = props => {
    const plural = props.event.remainingCapacity > 1 ? 's' : '';
    const getremainingCapacityText = props.event.isFullyBooked() ? 
    'COMPLET' : `${props.event.remainingCapacity} place${plural} disponible${plural}`;

    return (
        <div className={`event-content`}>
            <div className='event-header'>
                <div className='event-title'>{props.event.title}</div>
                <div className='event-spots'><i>{getremainingCapacityText}</i></div>
            </div>
            <div className='event-description'>{props.event.description}</div>
        </div>
    );
}

export default EventContent;