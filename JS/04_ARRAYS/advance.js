const myarr=[];
//%DebugPrint(myarr);
//V8 engine ,chakra,SpiderMonkey,javascriptcore,quickjs,duktape,boa,espruino,jsish,jerryscript,moddable,mujs,nashorn,rhino,graalvm
//jsvu javascript engine version updator -which engine or os is used 

//continous ,holey arrays have different performance characteristics,optimization,hidden classes,inline caching,garbage collection
//smi(small integer)
//packed element
//double(float,string,function)
//array have elements and properties

const arr1=[1,2,3,4,5];//packed smi elements best type of array
arr1.push(6);//add element at the end of array
arr1.push(7.560);//packed double elements
arr1.push('hello');//packed string elements
arr1.push(true);//packed boolean elements
arr1[10]=11;//holey array
console.log(arr1);
console.log(arr1.length);

//once downgrade happens, it will not upgrade again
//bound check
//hasOwnProperty(arr1,10) - true
//hasOwnProperty(arr1.prototype,10) - false
//hasOwnProperty(Object.prototype,10) - false

const arr2=[1,2,3,4,5];
console.log(arr2[8]);//undefined
//smi<-double<-packed optimization

const arrr3=new Array(3);
//just 3 holes holy_sim_elements
arr3[0]=1;//holy elements

const arr4=[]
arr4.push(1);//packed smi elements
arr4.push(2.5);//packed double elements (infinity,NaN)
arr4.push('hello');//packed string elements

//for ,for-of,forEach->use this instead of making own loop because these are already optimized by engine