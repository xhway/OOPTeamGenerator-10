const Engineer = require("../lib/engineer");

test("test to set Github account name", () =>{
    const testVal = "GitHubUserName";
    const testEmp = new Engineer("Georgia", 1, "onetest@test.com", testVal);
    expect(testEmp.github).toBe(testVal);
});

test("function getRole() should return \"Engineer\"", () =>{
    const testVal = "Engineer";
    const testEmp = new Engineer("Georgia", 1, "test@test.com", "GitHubUserName");
    expect(testEmp.getRole()).toBe(testVal);
});

test("test to get correct Github username from getGitHub()", () =>{
    const testVal = "GitHubUserName";
    const testEmp = new Engineer("Georgia", 1, "test@test.com", testVal);
    expect(testEmp.getGitHub()).toBe(testVal); 
});