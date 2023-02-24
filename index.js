const inquirer = require('inquirer');
const fs = require('fs');

//employees

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

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
            {
                type:"confirm",
                name: "newEmployee",
                message: "Would you like to add another member of the team?"
            }
        ]).then(answers => {
            //Pushes new intern if selected
            if (answers.employeeRole === "Intern"){
                const employee = new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.school);
                teamMembers.push(employee);
            //Pushes new engineer if selected    
            } else if(answers.employeeRole === "Engineer"){
                teamMembers.push(new Engineer(answers.employeeName, answers.employeeID,answers.employeeEmail, answers.github));
            }
            if (answers.newEmployee === true){
                chosenEmployeeData();
            } else{
               var main = fs.readFileSync('./html_layouts01/main1.html', 'utf8');
               main = main.replace(/{{teamName}}/g, teamName);

               var managerCard = fs.readFileSync('./html_layouts01/Manager2.html', 'utf8');

               managerCard = managerCard.replace('{{name}}', manager.getName());
               managerCard = managerCard.replace('{{role}}', manager.getRole());
               managerCard = managerCard.replace('{{id}}', manager.getID());
               managerCard = managerCard.replace('{{email}}', manager.getEmail()); 
               managerCard = managerCard.replace('{{officeNumber}}', manager.getOfficeNumber()); 

               //Appends team members after manager is selected

               var cards = managerCard;
               for (var i = 0; i < teamMembers.length; i++){
                var employee = teamMembers[i];
                cards += renderEmployee(employee);
               }
               main = main.replace('{{cards}}', cards);

               fs.writeFileSync('./output/team.html', main);

               console.log("The team html file has been generated!");
            }
        });
}

//create RenderEmployee function

function renderEmployee(employee){
    if (employee.getRole() === "Intern"){
        var internCard = fs.readFileSync('./html_layouts01/Intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getID());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    }else if (employee.getRole()=== "Engineer"){
        var engineerCard = fs.readFileSync('./html_layouts01/Engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getID());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGitHub());
        return engineerCard;
    }
}

managerData();
