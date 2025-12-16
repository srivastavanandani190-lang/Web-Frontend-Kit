let marks=[100,96,98,85,89,92];//heterogeneous
console.log("marks:",marks);
console.log("Number of marks:",marks.length);
console.log("Type of datatype:",typeof(marks));//object->mutable
console.log(marks[0]);//accessing
marks[1]=91;
marks.push(88);
marks.push("good");
// console.log("updated marks:",marks);
marks.pop();
marks.unshift(93);//insert initially
console.log("updated marks:",marks);
marks.shift();//delete starting element
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// //for-of loop
// for(let num of marks){
//     console.log(num);
// }
let arr=marks;
arr.push(75);
console.log(marks);

const arr1=[12,15,16];
arr1[1]=17;
console.log(arr1);

let arr2=arr1.slice(1,3);
console.log(arr2);
 
console.log(marks.splice(1,3));
console.log(arr1.indexOf(16));//includes,lastindexof
//characterwise comparison
marks.sort();
console.log(marks);
marks.reverse();
console.log(marks);
marks.sort((a,b)=>b-a);//descending(a-b->ascending)
console.log(marks);

//2D array
let twodarr=[12,45,6,[89,85,78],56];
console.log(twodarr[3]);
console.log(twodarr[3][0]);
const a=twodarr.flat();//1 level only(infinity ->all level)
console.log(a);
//spread operator
const A1=[10,20,30];
const A2=["a","b","c","d"];
const A3=[56.2,"hello"];
const A5=A1.concat(A2);//only two arrays
const A4=[...A1,...A2,...A3];//break each element
console.log(A5);
console.log(A4);
A1.push(A2);
console.log(A1);
console.log(typeof A2.toString());//string
console.log(A2.join(","));//display with joining
