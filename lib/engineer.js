const Employee = require('./employee');

//Engineer class extends the employee class--no need to grab employee constructors
//Adding Github link

class Engineer extends Employee{
    constructor(name, id, email, github){
        //new layout for new engineer
        super(name, id, email);
        this.github = github;
    }
    getGithb(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer