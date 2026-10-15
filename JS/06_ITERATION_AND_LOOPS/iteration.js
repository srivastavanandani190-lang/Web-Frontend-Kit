//for loop
let array = [1, 2, 3, 4, 5];
for(let index=0; index < array.length; index++) {
    console.log(array[index]);
}
//1.initialisation: let index=0
//2.condition: index < array.length
//3.increment: index++

//loop inside loop-->pattern 
for(let i=1; i<=3; i++) {
    for(let j=1; j<=10; j++) {    
        //table
        console.log(i + " * " + j + " = " + (i*j));
    }
    console.log("**********");
}
//continue and break
for(let i=1; i<=10; i++) {
    if(i==5) {
        continue; //skip the iteration when i=5
    }
    if(i==8) {
        break; //exit the loop when i=8
    }
    console.log(i);

}

//while loop--> used when we don't know the number of iterations
let list=["apple", "banana", "cherry","guava","mango","litchi"];
while(list.length > 0) {
    console.log(list[0]);
    list.shift();//remove the first element from the array
}

//do while loop--> used when we want to execute the loop at least once
let num=1;
do {
    console.log(num);
    num++;
}while(num <= 3);
