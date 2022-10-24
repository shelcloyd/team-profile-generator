const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office
    }
// assignment didn't actually say we needed this method, but it didn't make sense to leave it out...
    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;