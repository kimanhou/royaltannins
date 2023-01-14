import React from 'react';
import ParticipantModel from '../../../model/ParticipantModel';
import ParticipantMobile from './ParticipantMobile';
import './ParticipantsMobile.scss';

interface IParticipantsMobileProps {
    participants : ParticipantModel[];
}

const Participants : React.FC<IParticipantsMobileProps> = props => {
    const hasParticipants = props.participants.length > 0 ? true : false;
    const total : number = props.participants.reduce((a, b) => a + b.numberOfPeople, 0);

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
                    <tr className="spacer"></tr>
                    <tr>
                        <th className='right'><b>TOTAL</b></th>
                        <th className='center'>{total}</th>
                    </tr>
                </tbody>
            </table>}
            {!hasParticipants && <span className='no-participants'><i>Pas d'inscrit à cet évènement</i></span>}
        </div>
    );
}

export default Participants;