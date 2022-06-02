import React from 'react';
import EventModel from '../../model/EventModel';
import Participants from '../Contact/Participants/Participants';
import './Event.scss';
import EventButton from './EventButton/EventButton';

interface IEventProps {
    setRegisterPopUpVisible : (visible : boolean) => void;
    setEventId : (eventId : number) => void;
    setEventTitle : (eventTitle : string) => void;
    setMaxParticipants : (max : number) => void;
    event : EventModel;
    image : string;
}

const Event : React.FC<IEventProps> = props => {
    const onClickRegisterButton = () => {
        props.setEventId(props.event.id);
        props.setEventTitle(props.event.title);
        props.setRegisterPopUpVisible(true);
        props.setMaxParticipants(props.event.availableSpots);
    }

    const plural = props.event.availableSpots > 1 ? 's' : '';
    const getAvailableSpotsText = props.event.isFullyBooked() ? 
        'COMPLET' : `${props.event.availableSpots} place${plural} disponible${plural}`;

    const dateFormat = (date : Date) => {
        return `le ${date.getDate()} ${getMonthFrench(date.getMonth())} ${date.getFullYear()} `
            + `à ${date.getHours()}:${date.getMinutes() < 10 ? '0':''}${date.getMinutes()}`;
    }

    const getMonthFrench = (month : number) => {
        switch (month) {
            case 0:
                return 'janvier';
            case 1:
                return 'février';
            case 2:
                return 'mars';
            case 3:
                return 'avril';
            case 4:
                return 'mai';
            case 5:
                return 'juin';
            case 6:
                return 'juillet';
            case 7:
                return 'août';
            case 8:
                return 'septembre';
            case 9:
                return 'octobre';
            case 10:
                return 'novembre';
            case 11:
                return 'décembre';
            default :
                return '';
        }
    }

    const isFullyBooked = props.event !== undefined && props.event !== null && props.event.isFullyBooked();

    return (
        <div className={`event flex-row`}>
            <div className='left' style={{ backgroundImage: `url(${props.image})`}}>
            </div>

            <div className='right'>
                <div className='event-header'>
                    <div className='event-title'>{props.event.title}</div>
                    <div className='event-spots'><i>{getAvailableSpotsText}</i></div>
                </div>
                <div className='event-description'>{props.event.description}</div>
                <div className='event-date-line'></div>
                <div className='event-date-button flex-row'>
                    <div className='event-date'>{dateFormat(props.event.date)}</div>
                    <EventButton text="Je m'inscris" onClick={onClickRegisterButton} disabled={isFullyBooked}/>
                </div>

                {/* <Participants participants={props.event.participants} /> */}
            </div>
        </div>
    );
}

export default Event;