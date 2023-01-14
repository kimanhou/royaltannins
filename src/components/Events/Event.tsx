import React from 'react';
import { useIsMobile } from '../../hooks/UseMediaQuery';
import EventModel from '../../model/EventModel';
import './Event.scss';
import EventContent from './EventContent/EventContent';
import EventDateAndButton from './EventDateAndButton/EventDateAndButton';
import EventDateAndButtonMobile from './EventDateAndButton/EventDateAndButtonMobile';

interface IEventProps {
    setRegisterPopUpVisible : (visible : boolean) => void;
    setEventId : (eventId : number) => void;
    setEventTitle : (eventTitle : string) => void;
    setMaxParticipants : (max : number) => void;
    event : EventModel;
    image : string;
}

const Event : React.FC<IEventProps> = props => {
    const isMobile = useIsMobile();

    return (
        <div className={`event flex-row`}>
            <div className='left' style={{ backgroundImage: `url(${props.image})`}}>
            </div>

            <div className='right'>
                <EventContent event={props.event} />
                <div className='event-date-line'></div>
                {!isMobile && <EventDateAndButton event={props.event} setRegisterPopUpVisible={props.setRegisterPopUpVisible}
                    setEventId={props.setEventId} setEventTitle={props.setEventTitle}
                    setMaxParticipants={props.setMaxParticipants} />}
                {isMobile && <EventDateAndButtonMobile event={props.event} setRegisterPopUpVisible={props.setRegisterPopUpVisible}
                    setEventId={props.setEventId} setEventTitle={props.setEventTitle}
                    setMaxParticipants={props.setMaxParticipants} />}
            </div>
        </div>
    );
}

export default Event;