const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const distPath = path.join(dist, 'index.html');
const createHTML = require('./lib/create-html');

const team = [];
const buildTeam = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: "Do you have more team members to add?",
            name: 'menu',
            choices: ['Add an Engineer', 'Add an Intern', 'Done Building Team'],
        }
    ])
    .then(select => {
        switch (select.menu) {
            case 'Add an Engineer':
                buildEngineer();
                break;
            case 'Add an Intern':
                buildIntern();
                break;
            default:
                finalizeTeam();
        }
    })
};

const buildManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of this team's manager?",
                name: 'name',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        alert('Name not detected.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the manager's employee number?",
                name: 'id',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        alert('ID number not detected.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'email',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        alert('Email not detected.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'office',
                validate: office => {
                    if (office) {
                        return true;
                    } else {
                        alert('Office number not detected.')
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            team.push(manager);
            buildTeam();
        })
};

const buildEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    alert('Name not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Engineer's employee number?",
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    alert('ID number not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    alert('Email not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Engineer's GitHub username?",
            name: 'git',
            validate: git => {
                if (git) {
                    return true;
                } else {
                    alert('GitHub username not detected.')
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.git);
        team.push(engineer);
        buildTeam();
    })
};

const buildIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    alert('Name not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Intern's employee number?",
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    alert('ID number not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    alert('Email not detected.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What school does the Intern attend?",
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    alert('School not detected.')
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        buildTeam();
    })
};

const finalizeTeam = () => {
    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    }
    fs.writeFileSync(distPath, createHTML(team), 'utf-8');
}

buildManager();