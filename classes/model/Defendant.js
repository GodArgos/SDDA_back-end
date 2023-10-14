import { Person } from "./Person.js";

export class Defendant extends Person {    
    constructor(dni, names, lastnames, address, sex){
        super(dni, names, lastnames, sex);

        this.address = address;
    }
}
