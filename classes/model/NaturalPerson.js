import { User } from "./User.js";

export class NaturalPerson extends User {    
    constructor(dni, names, lastnames, sex, username, password, email, address){
        super(dni, names, lastnames, sex, username, password, email);

        this.address = address;
    }
}