import React from 'react';
import EventModel from '../../../model/EventModel';
import EventButton from '../EventButton/EventButton';
import EventDate from '../EventContent/EventDate';
import './EventDateAndButton.scss';

interface IEventDateAndButtonProps {
    event : EventModel;
    setRegisterPopUpVisible : (visible : boolean) => void;
    setEventId : (eventId : number) => void;
    setEventTitle : (eventTitle : string) => void;
    setMaxParticipants : (max : number) => void;
}

const EventDateAndButton : React.FC<IEventDateAndButtonProps> = props => {
    const onClickRegisterButton = () => {
        props.setEventId(props.event.id);
        props.setEventTitle(props.event.title);
        props.setRegisterPopUpVisible(true);
        props.setMaxParticipants(props.event.availableSpots);
    }

    const isFullyBooked = props.event !== undefined && props.event !== null && props.event.isFullyBooked();

    return (
        <div className='event-date-and-button flex-row'>
            <EventDate date={props.event.date} />
            <EventButton text="Je m'inscris" onClick={onClickRegisterButton} disabled={isFullyBooked}/>
        </div>
    );
}

export default EventDateAndButton;