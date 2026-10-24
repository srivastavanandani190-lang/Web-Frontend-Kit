class user{
    constructor(name, age,password){
        this.name = name;
        this.age = age;
        this.password = password;
    }
    logme(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
    static info(){
        console.log(`password is ${this.password}`);
    }
}
class Teacher extends user{
    constructor(name, age, password, subject){
        super(name, age, password);
        this.subject = subject;
    }
    subjectInfo(){
        console.log(`I teach ${this.subject}`);
    }
}
const teacher1 = new Teacher("Alice", 30, "teachPass123", "Mathematics");
teacher1.logme(); 
teacher1.subjectInfo();
//teacher1.info();