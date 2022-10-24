const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
    }

    getGithub() {
        return this.git;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;