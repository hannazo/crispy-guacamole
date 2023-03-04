const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

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
                        return console.log("Please enter manager's employee ID");
                    }
                    return true;
                }
            },
        ])
        .then(() => {
            console.log(`Added manager ${data.name} to the team`);
            addEmployee();
        })
    };

    // Recurring function that lets user to select the role of employee to add or quit selection
    function addEmployee() {
        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Would you like to add an engineer or an intern to your team?",
                choices: ["Engineer", "Intern", "None"]
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
                        console.log("Game is over");
                        break;
                }
            });
    };

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
            }
        ])
        .then((data) => {
            console.log(`Added engineer ${data.name} to the team`);
            addEmployee();
        })
    };

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
            }
        ])
        .then(() => {
            console.log(`Added intern ${data.name} to the team`);
            addEmployee();
        })
    };

    addManager();

};

init();