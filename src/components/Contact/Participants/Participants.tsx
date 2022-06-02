import React from 'react';
import ParticipantModel from '../../../model/ParticipantModel';
import Participant from './Participant';
import './Participants.scss';

interface IParticipantsProps {
    participants : ParticipantModel[];
}

const Participants : React.FC<IParticipantsProps> = props => {
    return (
        <div className={`participants`}>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Nombre de participants</th>
                    </tr>
                </thead>
                <tbody>
                    {props.participants.map(t => <Participant participant={t} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Participants;