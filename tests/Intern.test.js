const Intern = require("../lib/intern");

test("test to set school name", () => {
    const testVal = "Miami";
    const testEmp = new Intern("Canes", 1, "test@test.com", testVal);
    expect(testEmp.school).toBe(testVal);
});

test("test that getRole() should return \"Intern\"", () => {
    const testVal = "Intern";
    const testEmp = new Intern("Canes", 1, "test@test.com", "Miami");
    expect(testEmp.getRole()).toBe(testVal);
});

test("test to get school name from getSchool()", () =>{
    const testVal = "Miami";
    const testEmp = new Intern("Canes", 1, "test@test.com", testVal);
    expect(testEmp.getSchool()).toBe(testVal);
});