const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.gitHub = git;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;