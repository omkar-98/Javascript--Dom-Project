console.log("javascript file initalize");
let boxes = document.querySelectorAll(".box");


// console.log(document.querySelector(".container").children);   // Another methos for selecting all childrens


// let rndNumber = Math.random() * (max - min) + min

// function getRandomColor(){
//     let val1 = Math.ceil( 0 + Math.random() * 255 ) ;
//     let val2 = Math.ceil( 0 + Math.random() * 255 ) ;
//     let val3 = Math.ceil( 0 + Math.random() * 255 ) ; 
//     return `rgb(${val1},${val2},${val3})`; 
// }



// Array.from(boxes).forEach(function(e){
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = "black";

// e.addEventListener("click",function(){
//     console.log("background color : "+ getRandomColor());
// });
// });










// HEXADECIMAL generation

Array.from(boxes).forEach(function(e){
    let color =randomHexColor();
    e.style.backgroundColor = color;
    e.textContent = randomHexColor();    
})

function randomHexColor ()
{
    let rndColor = "#" + Math.floor(Math.random() * 16777215 ).toString(16);
    return rndColor;
}
