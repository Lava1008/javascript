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