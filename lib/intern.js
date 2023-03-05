// Import the parent class
const Employee = require('./employee');

// Intern subclass that extends Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;