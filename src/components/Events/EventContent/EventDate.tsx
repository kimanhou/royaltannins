import React from 'react';
import './EventDate.scss';

interface IEventDateProps {
    date : Date;
}

const EventDate : React.FC<IEventDateProps> = props => {
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
    
    return (
        <div className='event-date'>{dateFormat(props.date)}</div>
    );
}

export default EventDate;