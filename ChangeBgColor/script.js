/*
 let start ;
 
 let randomColor = function (){
    //16777215 is white In Decimal 
    let bgColor = "#" + Math.floor((Math.random() * 16777215)).toString(16).padStart(6,"0");
    document.body.style.backgroundColor = bgColor;
    
 };

 document.querySelector('#Start').addEventListener("click",function(){
    start = setInterval(randomColor , 1000);
    // document.body.style.backgroundColor = bgColor;
 });

 document.querySelector("#Stop").addEventListener("click",function(){
    clearInterval(start);
 });

 */







// CLEANER CODE

const generateRandomColor = function () {
  let color = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

let changeBgColor = function () {
  document.body.style.backgroundColor = generateRandomColor();
};

const startChangingColor = function () {
    if(!intervalId){
  intervalId = setInterval(changeBgColor, 1000);
};
}
// stop Background color

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId  = null;
};

document.querySelector("#Start").addEventListener("click", startChangingColor);
document.querySelector("#Stop").addEventListener("click", stopChangingColor);
