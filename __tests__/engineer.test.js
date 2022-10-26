const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const evan = new Engineer("Evan", "741852963", "none@none.com");

describe("Engineer", () => {
    describe("initialization", () => {
        it("should return the data passed into the constructor", () => {
            expect(evan.name).toBe("Evan");
            expect(evan.id).toBe("741852963");
            expect(evan.email).toBe("none@none.com");
        });
    });
    describe("getName()", () => {
        it("should return the engineer name", () => {
            expect(evan.getName()).toBe("Evan");
        });
    });
    describe("getID()", () => {
        it("should return the engineer id", () => {
            expect(evan.getId()).toBe("741852963");
        });
    });
    describe("getEmail()", () => {
        it("should return the engineer email", () => {
            expect(evan.getEmail()).toBe("none@none.com");
        });
    });
    describe("getRole()", () => {
        it("should return the 'Engineer' role", () => {
            expect(evan.getRole()).toBe("Engineer");
        });
    });
});