const Employee = require("../lib/employee");

test("test to make new instance for employee", () =>{
    const testEmp = new Employee("Darius");
    expect(typeof (testEmp)).toBe("object");
});

test("test to set name from constructor argument", () => {
    const name = "Georgia";
    const testEmp = new Employee(name);
    expect(testEmp.name).toBe(name);
});

test("test to set id", () =>{
    const testVal = 100;
    const testEmp = new Employee("Wu", testVal);
    expect(testEmp.id).toBe(testVal);
});

test("test to set Email", () =>{
    const testVal = "fourthtest@test.com";
    const testEmp = new Employee("Georgia", 1, testVal);
    expect(testEmp.email).toBe(testVal);
});

test("test to get name from getName()", () => {
    const testVal = "Darius";
    const testEmp = new Employee(testVal);
    expect(testEmp.getName()).toBe(testVal);
});

test("test to get id from getId()", () => {
    const testVal = 100;
    const testEmp = new Employee("Georgia", testVal);
    expect(testEmp.getID()).toBe(testVal);
});

test("test to get email from  getEmail()", () => {
    const testVal = "seventhtest@test.com";
    const testEmp = new Employee("Georgia", 1, testVal);
    expect(testEmp.getEmail()).toBe(testVal);
});

test("function getRole() should return \"Employee\"", () => {
    const testVal = "Employee";
    const testEmp = new Employee("Darius", 1, "fintest@test.com");
    expect(testEmp.getRole()).toBe(testVal);
});