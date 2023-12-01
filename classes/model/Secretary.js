import { User } from "./User.js";

export class Secretary extends User {    
    constructor(dni, names, lastnames, sex, username, password, email, numTuition, courtAddress){
        super(dni, names, lastnames, sex, username, password, email);

        this.numTuition = numTuition;
        this.courtAddress = courtAddress;
    }
}