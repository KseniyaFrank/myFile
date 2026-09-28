let number = parseInt(prompt("Enter your number:"));
if (number > 10){
    console.log("The number bigger than 10");
}
else{
    console.log("The number less than or equal to 10")
}


let file= confirm("Do you want to delete this file?");
if (file){
    console.log("File deleted.")
}
else{
    console.log("Deletion cancelled.")
}


let age =parseInt(prompt("Enter your age:"));
if (age < 18){
    console.log("You are still teenager.")
}
else if(age >=18 && age <=30){
    console.log("You are a young adult.")
}
else{
    console.log("You are adult.")
}


let evenOrOdd = parseInt(prompt("Enter the number:"))
let evenOrOddNumber =(evenOrOdd%2 === 0)?"This number is even":"This number is odd.";
console.log(evenOrOddNumber);


let week =parseInt(prompt("Enter a day of the week(Enter a number from 1 to 7):"))
let message;

switch(week){
    case "1":
        message="It is Monday.";
        break;
    case "2":
        message="It is Tuesday.";
        break;
    case "3":
        message="It is Wednesday.";
        break;
    case "4":
        message="It is Thursday";
        break;
    case "5":
        message= "It is Friday.";
        break;
    case "6":
        message = "It is Saturday.";
        break;
    case "7":
        message = "It is Sunday.";
        break;
    default:
        message= "Invalid value"

}
console.log(message);

let first =parseInt(prompt("Enter the first number:"))
let second=parseInt(prompt("Enter the second number:"))

if (first===second){
    console.log("The numbers are equal")
}
else{
    console.log((first>second)?"The first number is larger":"The second number is larger")
}

season=parseInt(prompt("Enter season of the year"))

switch(season){
    case 12:
    case 1:
    case 2:
         message="It is Winter"
         break;
    case 3:
    case 4:
    case 5:
        message="It is Spring"
        break;
    case 6:
    case 7:
    case 8:
        message="It is Summer"
        break;
    case 9:
    case 10:
    case 11:
        message="It is Autumn"
        break;
    default:
        message="Invalid value";
}
console.log(message);