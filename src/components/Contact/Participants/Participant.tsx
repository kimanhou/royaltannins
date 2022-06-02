import React from 'react';
import ParticipantModel from '../../../model/ParticipantModel';

interface IParticipantProps {
    participant : ParticipantModel;
}

const Participant : React.FC<IParticipantProps> = props => {
    return (
        <tr className={`participant`}>
            <td>{props.participant.name}</td>
            <td>{props.participant.firstName}</td>
            <td>{props.participant.email}</td>
            <td>{props.participant.numberOfPeople}</td>
        </tr>
    );
}

export default Participant;