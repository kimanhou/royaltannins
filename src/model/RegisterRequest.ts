export default class RegisterRequest {
    readonly eventId : number;
    readonly name : string;
    readonly firstName : string;
    readonly email : string;
    readonly participants : number;

    constructor(eventId : number, name : string, firstName : string, email : string, participants : number) {
        this.eventId = eventId;
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.participants = participants;
    }
}