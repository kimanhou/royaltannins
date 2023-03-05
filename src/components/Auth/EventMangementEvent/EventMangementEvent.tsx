import React from 'react';
import { useIsMobile } from '../../../hooks/UseMediaQuery';
import EventModel from '../../../model/EventModel';
import EventContent from '../../Events/EventContent/EventContent';
import EventDate from '../../Events/EventContent/EventDate';
import Participants from '../Participants/Participants';
import ParticipantsMobile from '../ParticipantsMobile/ParticipantsMobile';
import './EventMangementEvent.scss';

interface IEventMangementEventProps {
    event : EventModel;
}

const EventMangementEvent : React.FC<IEventMangementEventProps> = props => {
    const isMobile = useIsMobile();
    console.log('event', props.event);

    return (
        <div className={`event-management-event`}>
            <EventContent event={props.event} />
            <EventDate date={props.event.date} />
            {!isMobile && <Participants participants={props.event.participants} />}
            {isMobile && <ParticipantsMobile participants={props.event.participants} />}
            <div className='event-management-event-bottom-line'></div>
        </div>
    );
}

export default EventMangementEvent;