const inquirer = require('inquirer');
const fs = require('fs');

//employees

const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

const teamMembers = [];

let manager;
let teamName;

function managerData(){
    inquirer
        .prompt([
            {
                type:"input",
                message:"Insert team name.",
                name:"teamName"
            },
            {
                type:"input",
                message:"Please enter manager's name.",
                name:"managerName"
            },
            {
                type:"input",
                message:"Please enter manager's ID number.",
                name:"managerID"
            },
            {
                type:"input",
                message:"Please enter manager's email address",
                name:"managerEmail"
            },
            {
                type:"input",
                message:"Please enter manager's office number.",
                name:"officeNumber"
            },
        ]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamName = managerAnswers.teamName;
            console.log("Time to ask for employee information.")
            chosenEmployeeData()
        });
          
}
//employee information for intern/engineer
function chosenEmployeeData(){
    inquirer
        .prompt([
            {
                type: "list",
                message:"What is the employee's role?",
                name:"employeeRole",
                choices: ["Intern", "Engineer"]
            },
            {
                type:"input",
                message:"What is the employee's name?",
                name:"employeeName"
            },
            {
                type:"input",
                message:"Enter employee's ID number",
                name:"employeeID"
            },
            {
                type:"input",
                message:"Enter employee's email",
                name:"employeeEmail"
            },
            {
                type:"input",
                message:"Enter Engineer's Github user name",
                name:"github",
                when:(userInput) => userInput.employeeRole === "Engineer"

            },
            {
                type:"input",
                message:"Enter the Intern's school name",
                name:"school",
                when:(userInput) => userInput.employeeRole === "Intern"
            },
        ])
}