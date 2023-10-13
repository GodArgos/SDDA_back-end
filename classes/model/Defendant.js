class User extends Person {    
    constructor(dni, names, lastnames, address, sex){
        super(dni, names, lastnames, sex);

        this.address = address;
    }
}
