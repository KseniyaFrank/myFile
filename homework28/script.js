let fruits=["Apple","Banana","Orange"]
console.log(fruits)
console.log(fruits[0]+" "+fruits[fruits.length-1])
fruits.push("pear")
console.log(fruits)

fruits.pop()
fruits.shift()
console.log(fruits)
fruits.forEach((fruit)=>{
    console.log(fruit);
})

let lengths= fruits.map(fruit=> fruit.length);
console.log(lengths)

let numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even= numbers.filter(num=> num%2===0)
console.log(even)

let sum=numbers.reduce((acc,num)=>acc + num,0)
console.log(sum)

let five= numbers.find(num=>num>5)
console.log(five)

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=arr1.concat(arr2)
console.log(arr3)

let banana=fruits.includes("Banana")
console.log(banana)

fruits.reverse();
console.log(fruits)