import React from "react";
import ParticipantModel from "../../../model/ParticipantModel";
import Participant from "./Participant";
import "./Participants.scss";

interface IParticipantsProps {
    participants: ParticipantModel[];
}

const Participants: React.FC<IParticipantsProps> = (props) => {
    const hasParticipants = props.participants.length > 0 ? true : false;
    const total: number = props.participants.reduce(
        (a, b) => a + b.numberOfPeople,
        0
    );

    return (
        <div className={`participants`}>
            {hasParticipants && (
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th className="center">Personnes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.participants.map((participant) => (
                            <Participant
                                participant={participant}
                                key={participant.id}
                            />
                        ))}
                        <tr className="spacer"></tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className="right">
                                <b>TOTAL</b>
                            </th>
                            <th className="center">{total}</th>
                        </tr>
                    </tbody>
                </table>
            )}
            {!hasParticipants && (
                <span className="no-participants">
                    <i>Pas d'inscrit à cet évènement</i>
                </span>
            )}
        </div>
    );
};

export default Participants;
