import React, { useEffect, useState } from 'react';
import EventModel from '../../model/EventModel';
import Event from './Event';
import { getEventsPublic } from './EventsController';
import RegisterPopUp from './RegisterPopUp';

const Events : React.FC = props => {
    const [registerPopUpVisible, setRegisterPopUpVisible] = useState(false);
    const [eventId, setEventId] = useState(-1);
    const [eventTitle, setEventTitle] = useState('');
    const [events, setEvents] = useState<EventModel[]>([]);
    const [maxParticipants, setMaxParticipants] = useState<number | null>(null);
   
    useEffect(() => {
        getEventsPublic().then(t => setEvents(t));
    }, []);

    return (
        <div className={`events`}>
            {events.length === 0 && <>Events &amp; Merch à venir… Stay tuned!</>}
            {events.length > 0 && 
                <>
                    {events.map((t, index) => 
                    <Event setRegisterPopUpVisible={setRegisterPopUpVisible} setEventId={setEventId} setEventTitle={setEventTitle}
                        event={t} image={`https://source.unsplash.com/400x600?wine&${index}`} key={t.id} setMaxParticipants={setMaxParticipants}/>)}
                
                    <RegisterPopUp isVisible={registerPopUpVisible} setRegisterPopUpVisible={setRegisterPopUpVisible} 
                        eventId={eventId} eventTitle={eventTitle} setEvents={setEvents} events={events} maxParticipants={maxParticipants}/>
                </>}
        </div>
    );
}

export default Events;