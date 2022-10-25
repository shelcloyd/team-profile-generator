const Employee = require("../lib/employee");
const shel = new Employee("Shel", "123456789", "none@none.com");

describe("Employee class", () => {
    describe("initialization", () => {
        it("should return the data passed into the constructor", () => {
            expect(shel.name).toBe("Shel");
            expect(shel.id).toBe("123456789");
            expect(shel.email).toBe("none@none.com");
        });
    });
    describe("getName()", () => {
        it("should return the employee name", () => {
            expect(shel.getName()).toBe("Shel");
        });
    });
    describe("getId()", () => {
        it("should return the employee id", () => {
            expect(shel.getId()).toBe("123456789");
        });
    });
    describe("getEmail()", () => {
        it("should return the employee email", () => {
            expect(shel.getEmail()).toBe("none@none.com");
        });
    });
    describe("getRole()", () => {
        it("should return the 'Employee' role", () => {
            expect(shel.getRole()).toBe("Employee");
        });
    });
});

