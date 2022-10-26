const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
const sara = new Intern("Sara", "963852741", "none@none.com");

describe("Intern", () => {
    describe("initialization", () => {
        it("should return the data passed into the constructor", () => {
            expect(sara.name).toBe("Sara");
            expect(sara.id).toBe("963852741");
            expect(sara.email).toBe("none@none.com");
        });
    });
    describe("getName()", () => {
        it("should return the intern name", () => {
            expect(sara.getName()).toBe("Sara");
        });
    });
    describe("getId()", () => {
        it("should return the intern id", () => {
            expect(sara.getId()).toBe("963852741");
        });
    });
    describe("getEmail()", () => {
        it("should return the intern email", () => {
            expect(sara.getEmail()).toBe("none@none.com");
        });
    });
    describe("getRole()", () => {
        it("should return the 'Intern' role", () => {
            expect(sara.getRole()).toBe("Intern");
        });
    });
});