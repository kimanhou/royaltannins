import React, { useEffect, useState } from 'react';
import EventModel from '../../../model/EventModel';
import { getEventsPrivate } from '../../Events/EventsController';
import './EventManagement.scss';
import EventMangementEvent from '../EventMangementEvent/EventMangementEvent';

interface IEventManagementProps {

}

const EventManagement : React.FC<IEventManagementProps> = props => {
    const [events, setEvents] = useState<EventModel[]>([]);
    useEffect(() => {
        getEventsPrivate().then(t => setEvents(t));
    }, []);

    return (
        <div className={`event-management`}>
            <h2>Hello Ben !</h2>

            {events.length === 0 && <>No events</>}
            {events.length > 0 && 
                <>
                    {events.map(t => 
                        <EventMangementEvent event={t} />
                    )}
                </>
            }

        </div>
    );
}

export default EventManagement;