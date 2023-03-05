import React from 'react';
import ParticipantModel from '../../../model/ParticipantModel';

interface IParticipantMobileProps {
    participant : ParticipantModel;
}

const ParticipantMobile : React.FC<IParticipantMobileProps> = props => {
    return (
        <tr className={`participant-mobile`}>
            <td>{props.participant.surname} {props.participant.firstName} {props.participant.email}</td>
            <td className='center'>{props.participant.numberOfPeople}</td>
        </tr>
    );
}

export default ParticipantMobile;