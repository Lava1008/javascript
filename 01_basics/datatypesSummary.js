// primitive datatypes

// 7 types    number ,string ,undefined,boolean , null ,Symbol , bigint

const id = Symbol(123) ;
const anotherId = Symbol(123) ;
console.log(id===anotherId);

const big = 789562385296352888n
console.log(typeof(big));


// Reference type or non primitive type

// arrays , objects , functions


const heros = ["shaktiman","naagraj","doraemon"]

console.log(heros);

let myObj = {
    name: "hitesh", 
    age: 21
}
console.log(myObj);


// definition of function = function(){}
const myFunction = function(){
    console.log("Hello");
    
}
console.log(myFunction);



// ******************Stack and Heap memory*******************

// stack(primitive)---->variable's copy  heap(non primitive)---->refernce
let myYoutubeName = "LavaTheAjeebBlogger" 

let anotherName = myYoutubeName ; 
anotherName = "new name"
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl" 
}
let userTwo = userOne 
 
userTwo.email = "qwertyui@google.com"
console.log(userOne);
console.log(userTwo);


