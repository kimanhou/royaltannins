import { EVENTS_ENDPOINT } from "../../../config";
import ParticipantModel from "../../../model/ParticipantModel";

const getParticipantUrl = ({
    eventId,
    participantId,
}: {
    eventId: number;
    participantId: number;
}) => {
    return `${EVENTS_ENDPOINT}/${eventId}/participants/${participantId}`;
};

async function sendRequestParticipant({
    eventId,
    participantId,
    method,
    body,
}: {
    eventId: number;
    participantId: number;
    method: string;
    body?: BodyInit;
}) {
    const authTokenNullable = sessionStorage.getItem("authToken");
    const authToken = authTokenNullable ? authTokenNullable : "";
    const headers = new Headers({ Authorization: authToken });
    const url = getParticipantUrl({ eventId, participantId });

    const response = await fetch(url, {
        method,
        headers: new Headers(headers),
        body: body,
    });

    if (response.ok) {
        const json = await response.json();
        const event = ParticipantModel.deserialize(json);
        return event;
    }
    return null;
}

export async function deleteParticipant({
    eventId,
    participantId,
}: {
    eventId: number;
    participantId: number;
}) {
    sendRequestParticipant({ eventId, participantId, method: "DELETE" });
}

async function postParticipant({
    eventId,
    participant,
}: {
    eventId: number;
    participant: ParticipantModel;
}) {
    const authTokenNullable = sessionStorage.getItem("authToken");
    const authToken = authTokenNullable ? authTokenNullable : "";
    const headers = new Headers({ Authorization: authToken });
    const url = `${EVENTS_ENDPOINT}/${eventId}/participants/`;

    const response = await fetch(url, {
        method: "POST",
        headers: new Headers(headers),
        body: JSON.stringify(participant),
    });

    if (response.ok) {
        const json = await response.json();
        const event = ParticipantModel.deserialize(json);
        return event;
    }
    return null;
}
