// let h1 = document.getElementById("heading");
// let h2 = document.getElementById("h2");
// h1.style.color = "red";
// h1.style.fontSize = "50px";
// h1.style.textAlign = "center";
// console.log(h1[0].innerFlex);

// for (let a of h1) {
//     a.style.color = "red";
// }
// console.log(h1,"kyaa");

// let h1 = document.getElementsByTagName("kyaa");
// console.log(h1.[0].innerFlex);

// let h3 = document.getElementsByClassName("h1");

// let name = document.querySelectorAll("hi");
// h3[0].innerText = `Welcome ${name[0].innerText} to JavaScript Day 5`;

// let h1 = document.querySelector("hi");

// let p = document.querySelectorAll("hi");
// p.innerText = "hello";
// h1.appendChild(p);
// console.log(h1);

// h1.innerText = "hello";



let ino= document.querySelector("input");
let h1= document.querySelector("h2");

inp.addEventListener("input", function(e){
    // console.log(e.target.value);
    h1.innerText = e.target.value;
});


//built a calculator with ui

let inp= document.querySelector("#inp");
let button= document.querySelector("button");
for(let btn of button){
    btn.addEventListener("click",() => {
     console.log(btn.innerText);
        let btntext = btn.innerText;
        if(btntext === "AC"){
            inp.value = "";
        }else if(btntext === "="){
            inp.value = eval(inp.value);
        }else{
            inp.value += btntext;
        }       
