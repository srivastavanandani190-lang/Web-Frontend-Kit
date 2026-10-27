const obj={
    name:"honey",   
 age:5
}
const obj2={
    breed:"persian",
    color:"white"
}
obj2.__proto__=obj;  //linking obj2 to obj
console.log(obj2.name);//in prototype chain it will first check in obj2 if not found then it will check in obj
console.log(obj2.age);
arr=["apple","banana","grapes"];
console.log(arr.length);//length is property of array prototype
console.log(arr.push("mango"));//push is method of array prototype  

//class
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }   
}
const p1=new person("honey",5);
p1.greet();
const p2=new person("tom",7);
p2.greet();
class student extends person{  //student class inheriting person class  
    constructor(name,age,grade){
        super(name,age);  //calling parent class constructor
        this.grade=grade;
    }
    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}
const s1=new student("jerry",6,"1st");
s1.greet();  //inherited method from person class
s1.study();
const obj3={
    name:"spike",
    age:8
}
const obj4=Object.create(obj3); //creating obj4 with prototype obj3
console.log(obj4.name); //accessing property from prototype obj3