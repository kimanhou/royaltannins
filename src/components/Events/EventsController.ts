import EventModel from "../../model/EventModel";

const eventsBaseUrl =
    "https://nkyenlvln9.execute-api.us-east-1.amazonaws.com/events";

const getPublicUrl = () => {
    return `${eventsBaseUrl}/public`;
};

async function getEvents({ isPublic = false }: { isPublic: boolean }) {
    const authTokenNullable = sessionStorage.getItem("authToken");
    const authToken = authTokenNullable ? authTokenNullable : "";
    const url = isPublic ? getPublicUrl() : eventsBaseUrl;
    const headers = isPublic
        ? undefined
        : new Headers({ Authorization: authToken });

    const response = await fetch(url, {
        method: "GET",
        headers: new Headers(headers),
    });

    if (response.ok) {
        const json = await response.json();
        console.log("json", json);
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
