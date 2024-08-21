// let myDate = new Date() ;
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// above one giving millisecond from 1970
// console.log(myDate.getTime());
// here we have to remember that month given is in array form means we have to +1 for index
// let myCreatedDate = new Date(2024,7,21);
// let myCreatedDate = new Date(2024,7,21,20,11,37);
let myCreatedDate = new Date("08-21-2024");
// console.log(myCreatedDate.toString());
let myTimeStamp = Date.now() ;
 console.log(myTimeStamp);

 console.log(myCreatedDate.getTime());
 
//  here we can more customise localeString 
myTimeStamp.toLocaleString('default',{
    weekday : "long"
})
