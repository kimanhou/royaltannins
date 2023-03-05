import React from 'react';
import EventModel from '../../../model/EventModel';
import EventButton from '../EventButton/EventButton';
import EventDate from '../EventContent/EventDate';
import './EventDateAndButtonMobile.scss';

interface IEventDateAndButtonMobileProps {
    event : EventModel;
    setRegisterPopUpVisible : (visible : boolean) => void;
    setEventId : (eventId : number) => void;
    setEventTitle : (eventTitle : string) => void;
    setMaxParticipants : (max : number) => void;
}

const EventDateAndButtonMobile : React.FC<IEventDateAndButtonMobileProps> = props => {
    const onClickRegisterButton = () => {
        props.setEventId(props.event.id);
        props.setEventTitle(props.event.title);
        props.setRegisterPopUpVisible(true);
        props.setMaxParticipants(props.event.remainingCapacity);
    }

    const isFullyBooked = props.event !== undefined && props.event !== null && props.event.isFullyBooked();

    return (
        <div className='event-date-and-button-mobile'>
            <EventDate date={props.event.date} />
            <EventButton text="Je m'inscris" onClick={onClickRegisterButton} disabled={isFullyBooked}/>
        </div>
    );
}

export default EventDateAndButtonMobile;