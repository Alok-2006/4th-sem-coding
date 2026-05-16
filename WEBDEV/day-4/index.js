//dom- document object mode1

// it is used to connect javascript with html

// let arr=document.getElementsByClassName("h1");
// BigInt.addEventListener("click",()=>{
//     for(let val in arr){
//         Val.style.color="red";
//         document.body.style.backgroundColor=randomColor;
//         color[Math.floor(Math.random() * colors.length)];
//     }
// })


// //console.log("heheh");
// //console.log(btn,"kyaaaa");
//  // console.log("hello");

// //let btn= document.querySelector("button");
// let body= document.getElementsByClassName("two");
// console.log(btn,"kyaa");

//  let body= document.querySelector("body");

// // btn.addEventListener("click", function() {
  
// //    body.style.backgroundColor="black";
   
// // })





// DOM = Document Object Model

// Select button
let btn = document.querySelector("button");

// Select all h1 tags
let arr = document.getElementsByTagName("h1");

// Colors array
let colors = ["red", "blue", "yellow", "black","pink"];

// Button click event
btn.addEventListener("click", () => {

    // Change h1 color
    for (let val of arr) {
        val.style.color = "red";
    }

    // Random background color
    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});