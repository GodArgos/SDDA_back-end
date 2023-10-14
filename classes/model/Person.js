export class Person {
    constructor(dni, names, lastnames, sex){
        this.dni = dni;
        this.names = names;
        this.lastnames = lastnames;
        this.fullname = this.names + this.fullname;
        this.sex = sex;
    }
}