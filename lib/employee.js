class Employee{
    constructor(name, id, email){
        if (typeof name !== "string" || !name.trim().length){
            throw err("Expected parameter 'name' to be a non-empty string");
        }
        this.name = name;
        this.id = id;
        this.email= email;
    }
    getName(){
        return this.name;
    };
    getID(){
        return this.id;
    };
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;