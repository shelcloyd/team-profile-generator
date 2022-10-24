const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
const sara = new Intern("Sara", "963852741", "none@none.com");

describe("Intern", () => {
    describe("data", () => {
        it("should return the data passed into the constructor", () => {
            expect(intern.name).toBe("Sara");
            expect(intern.id).toBe("963852741");
            expect(intern.email).toBe("none@none.com");
        });
        it("should return the intern name from the getName() method", () => {
            expect(intern.getName()).toBe("Sara");
        });
        it("should return the intern id from the getId() method", () => {
            expect(intern.getId()).toBe("963852741");
        });
        it("should return the intern email from the getEmail() method", () => {
            expect(intern.getEmail()).toBe("none@none.com");
        });
        it("should return the intern role from the getRole() method", () => {
            expect(intern.getRole()).toBe("Intern");
        });
    });
});