// const buttons = document.querySelectorAll('.button');
// buttons.forEach(function(button){
//   console.log(button);
//   button.addEventListener("click" , function(event){
//     console.log(event.target);

//     //  if else 
//     if(event.target.id==="grey"){
//         document.body.style.backgroundColor= event.target.id ;
//     }
//     else if(event.target.id==="white"){
//        document. body.style.backgroundColor= event.target.id ;
//     }

//     else if(event.target.id==="yellow"){
//         document. body.style.backgroundColor= event.target.id ;
//      }

//      else if(event.target.id==="blue"){
//         document. body.style.backgroundColor= event.target.id ;
//      }

//   })
// })




const button = document.querySelectorAll('.button');
button.forEach(function(button){
    button.addEventListener("click",function(event){
        console.log(event.target);


        switch(event.target.id){

            case "grey":
                document.body.style.backgroundColor=event.target.id;
                break;

            case "white" :
                document.body.style.backgroundColor = event.target.id;
                break;


            case "blue" :
                    document.body.style.backgroundColor = event.target.id;
                    break;

            case "yellow" :
                        document.body.style.backgroundColor = event.target.id;
                        break;
                  
            default :
            console.log("invalid selected");
        }
    })
})