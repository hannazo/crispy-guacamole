const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Extends Employee class", () => {
        it("should add GitHub username to employee class if provided valid arguments", () => {
            const engineer = new Engineer('Hanna', 23, 'hanna@email.com', 'mygitusername');

            expect(engineer.gitHub).toEqual('mygitusername');
        })
    });
    describe("getGitHub", () => {
        it("should return engineer's GitHub username", () => {
            const gitHub = 'mygitusername';
            const engineer = new Engineer('Hanna', 23, 'hanna@email.com', gitHub)

            expect(engineer.getGitHub()).toEqual(gitHub);
        })
    });
    describe("getRole", () => {
        it("should return employee's role as an Engineer", () => {
            const role = 'Engineer';
            const engineer = new Engineer(role)

            expect(engineer.getRole()).toEqual(role);
        })
    });
});