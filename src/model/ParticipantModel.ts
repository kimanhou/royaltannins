export default class ParticipantModel {
    readonly name : string;
    readonly firstName : string;
    readonly email : string;
    readonly numberOfPeople : number;

    constructor(name : string, firstName : string, email : string, numberOfPeople : number) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.numberOfPeople = numberOfPeople;
    }

    static deserializeFromDynamoDb = (json : any) => {
        const name = json.name.S !== undefined && json.name.S !== undefined ? json.name.S : '';
        const firstName = json.firstName !== undefined && json.firstName.S !== undefined ? json.firstName.S : '';
        const email = json.email !== undefined && json.email.S !== undefined ? json.email.S : '';
        const numberOfPeople = json.numberOfPeople !== undefined && json.numberOfPeople.N !== undefined ? parseInt(json.numberOfPeople.N) : -1;

        return new ParticipantModel(name, firstName, email, numberOfPeople);
    }

    static deserializeArrayFromDynamoDb = (json : any) => {
        if (json != null && json.L != null && Array.isArray(json.L)) {
            return json.L.map((x : any) => ParticipantModel.deserializeFromDynamoDb(x.M));
        }

        return [];
    }
}