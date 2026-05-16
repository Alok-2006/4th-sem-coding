// let box= document.querySelector("button");
let box= document.querySelectorAll(".box");
let turno = true;
   for(let a of box){
    a.addEventListener("click", ()=>{
        console.log("hehehehehhe");
        if(a.innerText!=""){
            return;
        }
        if(turno==true){
            a.innerText="O"
            turno=false
           // a.disabled=true
    }else{
        a.innerText="X"
        turno=true
       // a.disabled=false
    }
  
    })
   }