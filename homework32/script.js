localStorage.setItem('greeting','hello world!');
 const result=localStorage.getItem('greeting');
console.log(result)
const deleted=localStorage.removeItem('greeting');
 const newResult=localStorage.getItem('greeting');
console.log(newResult)

const user = { name: 'Kseniya', age: 16, isLoggedIn: true };
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON); 

const storedUser = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser)


parsedUser.country='kazakstan';
const json=JSON.stringify(parsedUser);
localStorage.setItem('user', json);
console.log(user)


const condition=localStorage.getItem('user');
console.log(condition)
if (condition===null){
const user = { name: 'Kseniya', age: 16, isLoggedIn: true };
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON); 
}
else{
console.log(condition)
}

localStorage.clear();
const wasDeleted=localStorage.getItem('user');
console.log(wasDeleted)

let smth=[
    {
        title:'dosmth',
        completed: true
    },
    {
        title:'learnsmth',
        completed: false
    }
]

localStorage.setItem('smth', JSON.stringify(smth));
let saved=JSON.parse(localStorage.getItem('smth'));



const hehe = localStorage.getItem('smth');
const haha = JSON.parse(hehe);
console.log(haha)

localStorage.getItem(haha);
haha[1].completed=true;
const newbox = JSON.stringify(haha);
localStorage.setItem('haha', newbox);
console.log(newbox)