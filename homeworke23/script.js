let age = 15;
console.log(age);
age = 16;
console.log(age);
const birthYear = 2010;
console.log(birthYear);
// birthYear = 2009;
// console.log(birthYear);//Потому что его нельзя менять

//У него неочевидное поведение

let num = 17;
console.log(num);

let str = " Hello";
console.log(str);

let two =Boolean(2)
console.log(two);

let nullV = null ;
let undefinedV = undefined;

console.log(nullV);
console.log(undefinedV);

let nan =NaN;
console.log(nan);

let text= "25";
let number = parseInt(text)
console.log(number);

console.log(typeof number);

let number2 = 30;
let text2 = number2.toString();
console.log(text2);

console.log(typeof text2);


let a = undefined;
console.log(String(a));
console.log(Number(a));


let b =null;
console.log(String(b));
console.log(Number(b));

let task = 5;
task = String(task);
console.log(task)
console.log(typeof task);

let name= prompt("Please enter your name");
console.log(name);