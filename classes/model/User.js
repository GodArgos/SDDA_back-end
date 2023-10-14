import { Person } from "./Person.js";

export class User extends Person {    
    constructor(dni, names, lastnames, sex, username, password, email){
        super(dni, names, lastnames, sex);

        this.username = username;
        this.password = password;
        this.email = email;
    }
}
