const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

teamArray = [];

function init() {
    // Starter function that adds manager to the team and inits addEmployee function
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return console.log("Please enter manager's name");
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee ID?",
                validate: answer => {
                    if (answer === '' || isNaN(answer)) {
                        return console.log("Please enter manager's employee ID");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email address?",
                validate: answer => {
                    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
                    if (answer === '' || !emailRegex.test(answer)) {
                        return console.log("Please enter manager's email address");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                    if (answer === '' || isNaN(answer)) {
                        return console.log("Please enter manager's office number");
                    }
                    return true;
                }
            }
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamArray.push(manager);

            console.log(`*** Added manager ${data.name} to the team ***\n`);

            addEmployee();
        })
    };

    // Recurring function that lets user to select the role of employee to add or finish selection
    function addEmployee() {
        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Would you like to add an engineer or an intern to your team?",
                choices: ["Engineer", "Intern", "No, my team is complete"]
            }
        ])
            .then((data) => {
                switch (data.role) {
                    case "Engineer":
                        console.log("Adding Engineer to the team");
                        addEngineer();
                        break;
                    case "Intern":
                        console.log("Adding Intern to the team");
                        addIntern();
                        break;
                    default:
                        writeToFile();
                        break;
                }
            });
    };
    
    // Add Engineer details
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return console.log("Please enter engineer's name");
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's employee ID?",
                validate: answer => {
                    if (answer === '' || isNaN(answer)) {
                        return console.log("Please enter engineer's employee ID");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?",
                validate: answer => {
                    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
                    if (answer === '' || !emailRegex.test(answer)) {
                        return console.log("Please enter engineer's email address");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the engineer's GitHub username?",
                validate: answer => {
                    if (answer === '') {
                        return console.log("Please enter engineer's GitHub username");
                    }
                    return true;
                }
            }
        ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
            teamArray.push(engineer);

            console.log(`*** Added engineer ${data.name} to the team ***\n`);
            addEmployee();
        })
    };

    // Add Intern details
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return console.log("Please enter intern's name");
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee ID?",
                validate: answer => {
                    if (answer === '' || isNaN(answer)) {
                        return console.log("Please enter intern's employee ID");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                validate: answer => {
                    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
                    if (answer === '' || !emailRegex.test(answer)) {
                        return console.log("Please enter intern's email address");
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the intern's school name?",
                validate: answer => {
                    if (answer === '') {
                        return console.log("Please enter intern's school name");
                    }
                    return true;
                }
            }
        ])
        .then((data) => {
            console.log(`*** Added intern ${data.name} to the team ***\n`);
            addEmployee();
        })
    };

    // Write HTML file
    function writeToFile() {
        console.log(teamArray);
        fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) =>
        err ? console.log(err) : console.log('\nSuccess! HTML file has been created.')
        )
    };

    addManager();

};

init();