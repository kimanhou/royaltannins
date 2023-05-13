import { BASE_ENDPOINT } from "../../config";
import EventModel from "../../model/EventModel";

const eventsBaseUrl = `${BASE_ENDPOINT}events`;
const eventsPublicUrl = `${eventsBaseUrl}/public`;

async function sendRequestEvent({
    eventId,
    method,
    body,
}: {
    eventId: number;
    method: string;
    body?: BodyInit;
}) {
    const authTokenNullable = sessionStorage.getItem("authToken");
    const authToken = authTokenNullable ? authTokenNullable : "";
    const headers = new Headers({ Authorization: authToken });
    const url = `${eventsBaseUrl}/${eventId}`;

    const response = await fetch(url, {
        method,
        headers: new Headers(headers),
        body: body,
    });

    if (response.ok) {
        const json = await response.json();
        const event = EventModel.deserialize(json);
        return event;
    }
    return null;
}

async function getEvent({ eventId }: { eventId: number }) {
    return sendRequestEvent({ eventId, method: "GET" });
}

async function deleteEvent({ eventId }: { eventId: number }) {
    return sendRequestEvent({ eventId, method: "DELETE" });
}

async function updateEvent({
    eventId,
    event,
}: {
    eventId: number;
    event: EventModel;
}) {
    const body = JSON.stringify(event);
    return sendRequestEvent({ eventId, method: "UPDATE", body });
}

async function getEvents({ isPublic = false }: { isPublic: boolean }) {
    const authTokenNullable = sessionStorage.getItem("authToken");
    const authToken = authTokenNullable ? authTokenNullable : "";
    const url = isPublic ? eventsPublicUrl : eventsBaseUrl;
    const headers = isPublic
        ? undefined
        : new Headers({ Authorization: authToken });

    const response = await fetch(url, {
        method: "GET",
        headers: new Headers(headers),
    });

    if (response.ok) {
        const json = await response.json();
        const events = json
            .map(EventModel.deserialize)
            .sort(
                (a: EventModel, b: EventModel) =>
                    a.date.getDate() - b.date.getDate()
            );

        return events;
    }
    return [];
}

export const getEventsPublic = async () => {
    return await getEvents({ isPublic: true });
};

export const getEventsPrivate = async () => {
    return await getEvents({ isPublic: false });
};
