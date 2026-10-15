const course={
    courseName:"MERN Stack",
    duration:"6 months",
    fee:5000,
    courseinstructor:"John Doe"
}
//destructuring
const {courseName:name,duration,fee,courseinstructor}=course
console.log(name)
console.log(duration)
console.log(fee)
console.log(courseinstructor)

//api is now in json format 
// {
//     "courseName":"MERN Stack",
//     "duration":"6 months",
//     "fee":5000,
//     "courseinstructor":"John Doe"
// }
//json format tool
