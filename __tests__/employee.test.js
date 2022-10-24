const Employee = require("../lib/employee");
const shel = new Employee("Shel", "123456789", "none@none.com");

describe("Employee", () => {
    describe("data", () => {
        it("should return the data passed into the constructor", () => {
            expect(employee.name).toBe("Shel");
            expect(employee.id).toBe("123456789");
            expect(employee.email).toBe("none@none.com");
        });
        it("should return the employee name from the getName() method", () => {
            expect(employee.getName()).toBe("Shel");
        });
        it("should return the employee id from the getId() method", () => {
            expect(employee.getId()).toBe("123456789");
        });
        it("should return the employee email from the getEmail() method", () => {
            expect(employee.getEmail()).toBe("none@none.com");
        });
        it("should return the employee role from the getRole() method", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });
});