import { User } from "./User.js";

export class Judge extends User {    
    constructor(dni, names, lastnames, sex, username, password, email, numTuition, courtAddress){
        super(dni, names, lastnames, sex, username, password, email);

        this.numTuition = numTuition;
        this.courtAddress = courtAddress;
    }
}