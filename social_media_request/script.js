let btn = document.querySelector("#add");
let status = document.querySelector("h5") ;
let check = 0;


btn.addEventListener("click",function(){
    if(check===0){    
        status.innerHTML = " Friend";
        status.style.color ="green";
        btn.innerHTML = "Remove Friend"
        check =1;
    }
    else{
        status.innerHTML = "Stranger";
        status.style.color = "red"
        btn.innerHTML ="Add Friend"
        check=0;
    }

})
