const Employee = require("../lib/employee");

describe("Employee", () => {
    // Test when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const employee = new Employee('Hanna', 23, 'hanna@email.com');

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual('Hanna');
            expect(employee.id).toEqual(23);
            expect(employee.email).toEqual('hanna@email.com');
        })
    });
    describe("getName", () => {
        it("should return employee's name", () => {
            const name = 'Hanna';
            const employee = new Employee(name)

            expect(employee.getName()).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should return employee's ID", () => {
            const id = 23;
            const employee = new Employee('Hanna', id)

            expect(employee.getId()).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should return employee's email", () => {
            const email = 'hanna@email.com';
            const employee = new Employee('Hanna', 23, email)

            expect(employee.getEmail()).toEqual(email);
        })
    });
    describe("getRole", () => {
        it("should return employee's role", () => {
            const role = 'Employee';
            const employee = new Employee(role)

            expect(employee.getRole()).toEqual(role);
        })
    });
});