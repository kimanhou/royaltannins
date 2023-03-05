import ParticipantModel from "./ParticipantModel";

export default class EventModel {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly date: Date;
    readonly remainingCapacity: number;
    readonly totalCapacity: number;
    readonly participants: ParticipantModel[];

    constructor(
        id: number,
        title: string,
        description: string,
        date: Date,
        remainingCapacity: number,
        totalCapacity: number,
        participants: ParticipantModel[]
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.remainingCapacity = remainingCapacity;
        this.totalCapacity = totalCapacity;
        this.participants = participants;
    }

    static deserialize = (json: any) => {
        const id = json.id;
        const title = json.title;
        const description = json.description;
        const date = new Date(Date.parse(json.date));
        const remainingCapacity = json.remainingCapacity;
        const totalCapacity = json.totalCapacity;
        const participants = ParticipantModel.deserializeArray(
            json.participants
        );

        return new EventModel(
            id,
            title,
            description,
            date,
            remainingCapacity,
            totalCapacity,
            participants
        );
    };

    isFullyBooked = () => {
        return this.remainingCapacity <= 0;
    };
}
