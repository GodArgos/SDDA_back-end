import { capitalizeFirstLetter } from "../../utils/Functions";

export class Person {
    constructor(dni, names, lastnames, sex) {
        this.dni = dni;
        this.names = capitalizeFirstLetter(names);
        this.lastnames = capitalizeFirstLetter(lastnames);
        this.fullname = this.names + " " +this.fullname;
        this.sex = sex;
    }
}