const user={
    name:"Nandani",
    email:"nandani@example.com"
}
const Teacher={
    makevideo:true
}
const TeacherSupport={
    isAvailable:true
}
const TAsupport={
    makeassignment:true,
    __proto__:TeacherSupport
}
Teacher.__proto__=user;
//modern way
Object.setPrototypeOf(Teacher, user);

let anothername="Isabel";
String.prototype.trueLength=function(){
    console.log(`The length of the string is ${this.trim().length}`);
}
anothername.trueLength();
"Navya".trueLength();
