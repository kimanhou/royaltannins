import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";
import ParticipantModel from "./ParticipantModel";

export default class EventModel {
    readonly id : number;
    readonly title : string;
    readonly description : string;
    readonly date : Date;
    readonly availableSpots : number;
    readonly participants : ParticipantModel[];

    constructor(id : number, title : string, description : string, date : Date, availableSpots : number, participants : ParticipantModel[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.availableSpots = availableSpots;
        this.participants = participants;
    }

    static deserializeFromDynamoDb = (json : any) => {
        const id = parseInt(json.eventId.S);
        const title = json.title.S;
        const description = json.description.S;
        const date = new Date(Date.parse(json.date.S));
        const availableSpots = parseInt(json.availableSpots.N);
        const participants = ParticipantModel.deserializeArrayFromDynamoDb(json.participants);
        
        return new EventModel(id, title, description, date, availableSpots, participants);
    }

    static deserialize = (json : any) => {
        const id = JsonDeserializationHelper.assertField(json, "id", FieldType.NUMBER);
        const title = JsonDeserializationHelper.assertField(json, "title", FieldType.STRING);
        const description = JsonDeserializationHelper.assertField(json, "description", FieldType.STRING);
        const date = JsonDeserializationHelper.assertField(json, "date", FieldType.DATE);
        const availableSpots = JsonDeserializationHelper.assertField(json, "availableSpots", FieldType.NUMBER);
        const participants = ParticipantModel.deserializeArrayFromDynamoDb(json.participants);

        return new EventModel(id, title, description, date, availableSpots, participants);
    }

    isFullyBooked = () => {
        return this.availableSpots === 0;
    }
}