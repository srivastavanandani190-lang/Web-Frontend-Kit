const newelement = document.createElement("h2");
newelement.textContent = "Welcome to Coder Army!";
newelement.style.color = "yellow";
newelement.id = "second";
const element= document.getElementById("first");
element.after(newelement);
// element.before(newelement);

const newelement2 = document.createElement("h3");
newelement2.textContent = "Welcome to Coder Army!";
newelement2.style.color = "pink";
newelement2.id = "third";
newelement2.className = "thirdclass";//multiple classname hence overwrites.
newelement2.className += "fourthclass";//appends another class name.
newelement2.classList.add("fifthclass","sixthclass");//adds multiple class names.
newelement.after(newelement2);
console.log(newelement2.getAttribute("class"));

// const list=document.createElement("li");
// list.textContent="GUAVA";
// const list2=document.createElement("li");
// list2.textContent=" APPLE";
// const list3=document.createElement("li");
// list3.textContent=" BANANA";
// const list4=document.createElement("li");
// list4.textContent=" ORANGE";
// const ul=document.getElementById("listing");
// ul.append(list);
// ul.append(list2);
// ul.append(list3);
// ul.prepend(list4);

//backend loop (data structure)
const fruits=["MANGO","PINEAPPLE","GRAPES","WATERMELON"];
const ul=document.getElementById("listing");
const fragment=document.createDocumentFragment();//ui me last me ek baar hi render hoga.
for(let fruit of fruits){
    const list=document.createElement("li");
    list.textContent=fruit;
    // ul.append(list);//not good for ui rendering performance
    fragment.append(list);
}
ul.append(fragment);
// const s1=document.getElementById("first");
// s1.remove();//removes the element from the dom

//childnodes includes nextline text also
//children includes only element nodes
//innerHTML includes the html structure inside the element(token can be dangerous)
//textContent includes only the text inside the element(account can be hacked)