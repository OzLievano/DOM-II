// Your code goes here


const destinationEvent = document.querySelectorAll(".destination");
//1
destinationEvent[0].addEventListener('mouseover',()=>{
    destinationEvent[0].style.backgroundColor = "blue";
})

//2 

destinationEvent[0].addEventListener('mouseout',()=>{
    destinationEvent[0].style.backgroundColor = "white";
})
//3
const clickLogo = document.querySelector(".logo-heading");

clickLogo.addEventListener('click',()=>{
    clickLogo.style.backgroundColor = 'red';
})

//4 

const navs = document.querySelectorAll(".nav");

navs.forEach(nav => {
    nav.addEventListener('dblclick',(event) => {
        event.target.style.color = "blue";
    })
})

//5 

const smallScreen = document.querySelector(".intro img");

//6 
window.addEventListener("resize",() => {
   smallScreen.src = "";
})

//7
window.addEventListener("keypress",()=>{
    destinationEvent[1].style.backgroundColor="red";})

// 8

window.addEventListener("keydown",()=>{
    destinationEvent[2].style.backgroundColor="yellow";
})

//9

const contentDest = document.querySelector('.content-destination p');

contentDest.addEventListener("copy",(event)=>{
    event.target.style.color = "pink";
})
//10

const destImg = document.querySelector('.content-destination img');

destImg.addEventListener('mousedown',()=>{
    destImg.src ="";
})