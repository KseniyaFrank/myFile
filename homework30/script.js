let i= document.getElementById("message")
i.textContent="Welcome"

let box =document.getElementsByClassName("box");
for (let i =0; i<box.length;i++ ){
    box[i].style.backgroundColor="green"
}
const first=document.querySelector("#text");
first.textContent="Hello"

const second=document.querySelectorAll(".box");
second.forEach(paragraph => {
   paragraph.style.color = 'blue';
});


const le=document.querySelectorAll(".highlight");
le.forEach(paragraph =>{
    paragraph.style.color="red"
})