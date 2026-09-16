let a= 10;
let b= 5;
let c=2;

console.log(a + b +c);
console.log((a+c)- b);
console.log((a * b )/c );
console.log(a % b);

let x=7;
console.log(x++ + ++x);
console.log(x-- - --x);

let str = "The result is:";
let num1=4;
let num2=5;
let amount=num1+num2;
amount=String(amount);
console.log(str + amount);


console.log(a>b && a>0 && b>0);
console.log(c<10 && c==2);
console.log((a/c)!=5);

let str10="10";
let num10=10;

console.log(str10==num10);
console.log(str10===num10);
//Потому что первым неважен тип данных а второму важен
let y= 5;

console.log((x % 2 == 0 || x % 3 == 0) && (x % 6 != 0) );
console.log(y>10 || y<5);