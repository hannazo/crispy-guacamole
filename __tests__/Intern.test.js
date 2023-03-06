const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Extends Employee class", () => {
        it("should add school to employee class if provided valid arguments", () => {
            const intern = new Intern('Hanna', 23, 'hanna@email.com', 'Noname University');

            expect(intern.school).toEqual('Noname University');
        })
    });
    describe("getSchool", () => {
        it("should return intern's school", () => {
            const school = 'Noname University';
            const intern = new Intern('Hanna', 23, 'hanna@email.com', school)

            expect(intern.getSchool()).toEqual(school);
        })
    });
    describe("getRole", () => {
        it("should return employee's role as an Intern", () => {
            const role = 'Intern';
            const intern = new Intern(role)

            expect(intern.getRole()).toEqual(role);
        })
    });
});