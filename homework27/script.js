let person={
    name:"Kseniya",
    age:16,
    city:"Almaty"
}
console.log(person)
console.log(person.name, person.age)

person.city="Otegen batyr"
console.log(person.city)

person.greet=function(){
    console.log("Hello, my name is " + this.name + ", i am " + this.age)
}
person.greet()

let obj1={
    a:10,
    b:20
}

let obj2={
    a:10,
    b:20
}

first= obj1==obj2
console.log(first)

second= obj1===obj2
console.log(second)

let books={
    title:"Evgenyi Onegin",
    author:"Pushkin",
    details:
    {
        year:1833,
        pages:288,
    }
}
let copybook =Object.assign({},books)
copybook.year=1834
console.log(books)
console.log(copybook)


let calculator={
    a:10,
    b:5,
    sum(){
        return this.a + this.b
    },
    multiply(){
        return this.a * this.b
    }

}
console.log(calculator.sum())
console.log(calculator.multiply())

const car={
    brand:"toyota",
    model:"camri"
}
car.brand="bmw";
console.log(car)

//потому что нельзя изменить только сам обьект


