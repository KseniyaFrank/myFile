const greet= function(name){
    console.log("Hello,"+ name +"!" );
}
greet("world")

function sayHelllo(name){
    console.log("Hello, " + name + "!");
}
sayHelllo("Xeniya");
sayHelllo("Timur");
sayHelllo("Arina");

function sum(a,b){
    return a + b;
}
console.log(sum(2,7));


function isEven(number){
    return number%2===0;
}
console.log(isEven(3));
console.log(isEven(4));


function max(c,d){
   if (c>d){
     return c;
   }
   else if(d>c){
    return d
   }
   else{
    return "They are equal"
   }
}
console.log(max(5,7));

function getInitials(firstName,lastName){
    return ((firstName[0]) + "." + (lastName[0])+ ".");

}
console.log(getInitials("Xeniya","Frankovskaya"))

function square(num2){
    return num2 * num2;
}
console.log(square(5))

function cube(num3){
    return square(num3) * num3;
}
console.log(cube(7))


const sum2 = (a, b) => a + b;

console.log(sum2(3, 4)); 


function getFactorial(numFac){
   if (numFac===1||numFac===0){
    return 1
   }
   else{
    return numFac*getFactorial(numFac-1)
   }
}
console.log(getFactorial(5))