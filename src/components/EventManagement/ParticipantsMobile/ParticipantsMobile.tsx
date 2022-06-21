import React from 'react';
import ParticipantModel from '../../../model/ParticipantModel';
import ParticipantMobile from './ParticipantMobile';
import './ParticipantsMobile.scss';

interface IParticipantsMobileProps {
    participants : ParticipantModel[];
}

const Participants : React.FC<IParticipantsMobileProps> = props => {
    const hasParticipants = props.participants.length > 0 ? true : false;

    return (
        <div className={`participants-mobile`}>
           {hasParticipants &&  <table>
                <thead>
                    <tr>
                        <th>Nom &amp; Email</th>
                        <th className='center'>Personnes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.participants.map(t => <ParticipantMobile participant={t} />)}
                </tbody>
            </table>}
            {!hasParticipants && <span className='no-participants'><i>Pas d'inscrit à cet évènement</i></span>}
        </div>
    );
}

export default Participants;