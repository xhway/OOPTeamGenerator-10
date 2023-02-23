const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("test to set office number", () =>{
    const testVal = 000;
    const testEmp = new Manager("Wst", 1, "test@test.com", testVal);
    expect(testEmp.officeNumber).toBe(testVal);
});

test("function getRole() should return \"Manager\"", () => {
    const testVal = "Manager";
    const testEmp = new Manager("Wst", 1, "test@test.com", 000);
    expect(testEmp.getRole()).toBe(testVal);
} );

test("test to get office number from getOffice()", () =>{
    const testVal = 100;
    const testEmp = new Manager("Wst", 1, "test@test.com", testVal);
    expect(testEmp.getOfficeNumber()).toBe(testVal);
});