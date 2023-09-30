class User {
    name;
    email;
    address;

    constructor(){
        console.log("I'm constructor of    User class")
    }


    getUser(){
        console.log("I'm getUser func of User class")
    }
}

class Student extends User{
    
    role="student";    
    phone;
    constructor(){
        super()
        console.log("I'm constructor of Student class")
    }
    getUser(){
        console.log("I'm getUser func of Student Class")
    }
}

let student1 = new Student();
student1.getUser()

class Admin extends User{
    role = "admin";
    phone;
    isActive;
}
   