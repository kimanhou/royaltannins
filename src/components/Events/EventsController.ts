import EventModel from "../../model/EventModel";

export const getEvents = async () => {
    return await fetchEventsFromDynamoDb();
}

const fetchEventsFromDynamoDb = () => {
    return fetch('https://947o0izppc.execute-api.us-east-1.amazonaws.com', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            const items = data.Items;
            return items.map(EventModel.deserializeFromDynamoDb).sort((a : EventModel, b : EventModel) => a.date.getDate() - b.date.getDate());
        });
}

