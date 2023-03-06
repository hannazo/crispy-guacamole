const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Extends Employee class", () => {
        it("should add office number to employee class if provided valid arguments", () => {
            const manager = new Manager('Hanna', 23, 'hanna@email.com', 123456);

            expect(manager.officeNumber).toEqual(123456);
        })
    });
    describe("getOfficeNumber", () => {
        it("should return managers's office number", () => {
            const officeNumber = 123456;
            const manager = new Manager('Hanna', 23, 'hanna@email.com', officeNumber)

            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        })
    });
    describe("getRole", () => {
        it("should return employee's role as a Manager", () => {
            const role = 'Manager';
            const manager = new Manager(role)

            expect(manager.getRole()).toEqual(role);
        })
    });
});