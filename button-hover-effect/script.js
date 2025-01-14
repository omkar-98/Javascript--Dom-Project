 const btnEl = document.querySelector(".button");
 
btnEl.addEventListener("mouseover",function(dets){
const x = dets.pageX - btnEl.offsetLeft ;
const y = dets.pageY - btnEl.offsetTop ;

btnEl.style.setProperty("--xPos" , x + "px");
btnEl.style.setProperty("--yPos" , y +"px")
});
