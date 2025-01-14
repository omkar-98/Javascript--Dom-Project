const imgContainer = document.querySelector(".image-container")

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
   imgNum = 8;
    addNewImage();

});

function addNewImage(){

for(let i = 0 ; i< imgNum ; i++){
    const newImgEl = document.createElement("img"); // we create new img 
    newImgEl.src =`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imgContainer.appendChild(newImgEl);
}
  
}
