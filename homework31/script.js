const button= document.querySelector('#but');
button.style.backgroundColor='lightBlue'
button.addEventListener('click', () =>{
    alert('It was made with JS')

}
)

const div = document.querySelector('#myDiv');
div.addEventListener('click', () =>{
    div.style.backgroundColor='blue'
})
div.addEventListener('mouseover', () =>{
    console.log('Element was clicked')
})

const input =document.querySelector('#textInput');
input.addEventListener('keydown', (event) =>{
    console.log(event.key)
})

const a =document.querySelector('#myLink');
a.addEventListener('click', (event) =>{
    event.preventDefault()
})
a.addEventListener('click', () =>{
    alert('Action was cancelled')
})

const list=document.querySelector('#list');
list.addEventListener('click',(event) =>{
    console.log(event.target.textContent)
})

const inputt=document.querySelector('#keyboardInput');
inputt.addEventListener('keydown',(event) =>{
    console.log(event.code)
})