import EventModel from "../../model/EventModel";

export const getEvents = async () => {
    return await fetchEventsFromDynamoDb();
}

const fetchEventsFromDynamoDb = () => {
    const authTokenNullable = sessionStorage.getItem('authToken');
    console.log('authToken from session storage', authTokenNullable);
    const authToken = authTokenNullable ? authTokenNullable : '';
    return fetch(' https://5vfzzakli8.execute-api.us-east-1.amazonaws.com/default/royalTannins-dynamoDbHandler', 
        { method: 'GET', 
          headers: new Headers({'custom-token': authToken})
        })
        .then(response => response.json())
        .then(data => {
            const items = data.Items;
            return items.map(EventModel.deserializeFromDynamoDb).sort((a : EventModel, b : EventModel) => a.date.getDate() - b.date.getDate());
        });
}

