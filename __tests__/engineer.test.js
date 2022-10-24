const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const evan = new Engineer("Evan", "741852963", "none@none.com");

describe("Engineer", () => {
    describe("data", () => {
        it("should return the data passed into the constructor", () => {
            expect(engineer.name).toBe("Evan");
            expect(engineer.id).toBe("741852963");
            expect(engineer.email).toBe("none@none.com");
        });
        it("should return the engineer name from the getName() method", () => {
            expect(engineer.getName()).toBe("Evan");
        });
        it("should return the engineer id from the getId() method", () => {
            expect(engineer.getId()).toBe("741852963");
        });
        it("should return the engineer email from the getEmail() method", () => {
            expect(engineer.getEmail()).toBe("none@none.com");
        });
        it("should return the engineer role from the getRole() method", () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});