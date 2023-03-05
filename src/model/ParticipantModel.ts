export default class ParticipantModel {
    readonly id: string;
    readonly eventId: string;
    readonly surname: string;
    readonly firstName: string;
    readonly email: string;
    readonly numberOfPeople: number;

    constructor(
        id: string,
        eventId: string,
        surname: string,
        firstName: string,
        email: string,
        numberOfPeople: number
    ) {
        this.id = id;
        this.eventId = eventId;
        this.surname = surname;
        this.firstName = firstName;
        this.email = email;
        this.numberOfPeople = numberOfPeople;
    }

    static deserialize = (json: any) => {
        const surname = json.surname !== undefined ? json.surname : "";
        const firstName = json.firstname !== undefined ? json.firstname : "";
        const email = json.email !== undefined ? json.email : "";
        const numberOfPeople =
            json.numberOfPeople !== undefined ? json.numberOfPeople : -1;
        const eventId = json.eventId;
        const id = json.id;

        return new ParticipantModel(
            id,
            eventId,
            surname,
            firstName,
            email,
            numberOfPeople
        );
    };

    static deserializeArray = (json: any) => {
        if (json != null && Array.isArray(json)) {
            return json.map((x: any) => ParticipantModel.deserialize(x));
        }

        return [];
    };
}
