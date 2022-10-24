const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const kyle = new Manager("Kyle", "987654321", "none@none.com");

describe("Manager", () => {
    describe("data", () => {
        it("should return the data passed into the constructor", () => {
            expect(manager.name).toBe("Kyle");
            expect(manager.id).toBe("987654321");
            expect(manager.email).toBe("none@none.com");
        });
        it("should return the manager name from the getName() method", () => {
            expect(manager.getName()).toBe("Kyle");
        });
        it("should return the manager id from the getId() method", () => {
            expect(manager.getId()).toBe("987654321");
        });
        it("should return the manager email from the getEmail() method", () => {
            expect(manager.getEmail()).toBe("none@none.com");
        });
        it("should return the manager role from the getRole() method", () => {
            expect(manager.getRole()).toBe("Manager");
        });
    });
});