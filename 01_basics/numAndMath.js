const score = 100 ;
console.log(score)

const balance  = new Number(100);
console.log(balance) ; 

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2));
const otherNum = 23.4996
const otherNum1 = 123.8996
// to fixed for decimal values

console.log(otherNum.toFixed(2));
console.log(otherNum1.toFixed(2));

// precision value
const otherNum2 = 1123.8966

console.log(otherNum1.toPrecision(5))
console.log(otherNum1.toPrecision(2))

const hundreds = 1000000000;
// have commas
console.log(hundreds.toLocaleString('en-IN'))

// ******Maths**********


// console.log(Math) ; 
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.min(1,23,45,6));
// console.log(Math.max(1,23,45,6));

// Math.random()
// Always lie between 0 to 1
console.log(((Math.random()*10)+1).toFixed(0));


const maxi = 20;
const mini = 10 ;
console.log(Math.random()*(maxi-mini+1)+mini);
 
