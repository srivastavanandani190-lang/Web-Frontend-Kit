const user={
    name:"Nandani",age:20,
    emailid:"srivastavanandani190@",
    amount:200000,
    address:{
        city:"bhabua",
        state:"bihar"}

}
console.log(user)
console.log(typeof user);
console.log(user.age);
user.adhar=158634;
user.amount=800000;
delete user.emailid;
console.log(user);
console.log(user["name"]);
const user2=user;
user2.age=21;
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
for(let keys in user){
    console.log(keys,user[keys]);
}
//object ->function
const func={
    greeting:function(){
        console.log("hello");
        return 20;
    }
}
func.greeting();
//nested object
console.log(user.address.city);
const user3=user;//refrence yes change
const user4={...user};//shallow copy no change
user4.name="honey";
console.log(user)
console.log(user4)
user3.address.city="varanasi";//deep copy yes change
console.log(user);
const x=structuredClone(user);//independent copy hence no change
x.address.city="xyz";
console.log(user);

const z=[10,20,30];
const [first,second]=z;
console.log(first,second);//array is object in js