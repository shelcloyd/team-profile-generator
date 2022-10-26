const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const kyle = new Manager("Kyle", "987654321", "none@none.com");

describe("Manager", () => {
    describe("initialization", () => {
        it("should return the data passed into the constructor", () => {
            expect(kyle.name).toBe("Kyle");
            expect(kyle.id).toBe("987654321");
            expect(kyle.email).toBe("none@none.com");
        });
    });
    describe("getName()", () => {
        it("should return the manager name", () => {
            expect(kyle.getName()).toBe("Kyle");
        });
    });
    describe("getId()", () => {
        it("should return the manager id", () => {
            expect(kyle.getId()).toBe("987654321");
        });
    });
    describe("getEmail()", () => {
        it("should return the manager email", () => {
            expect(kyle.getEmail()).toBe("none@none.com");
        });
    });
    describe("getRole()", () => {
        it("should return the 'Manager' role", () => {
            expect(kyle.getRole()).toBe("Manager");
        });
    });
});