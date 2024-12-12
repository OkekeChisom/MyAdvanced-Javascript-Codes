// DOM means document object model
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=> {
    alert("You just clicked on a click me button")
});

                //  OR  
// document.addEventListener('DOMContentLoaded', function(){
//     const btn = document.getElementById('btn');
// btn.addEventListener('click', ()=> {
//     alert("You just clicked on a click me button")
// })

// });

// function changeText(){
//     let para = document.getElementById('demo')
//     para.innerHTML = "the text is changed";
// };


let para = document.getElementById('demo');
let button = document.getElementById('btn-');
let button2 = document.getElementById('btn3').addEventListener('click', () =>{
    reset();
});

button.addEventListener('click', () =>{
    changeText();
});

function changeText(){
    para.innerHTML = " the text is changed";
}
function reset(){
    para.innerHTML = "This is a paragraph";
}

// Using querySelector
const title = document.querySelector(".title");
title.textContent = "Joel ThankGod"; // to replace an item in html using js , call on the variable .textContent = 
// the new item
title.style.color = "blue";
 // How to create a new div or any text using javaScript
const newElement = document.createElement("div");
newElement.textContent = "second Title";
document.body.appendChild(newElement);

const newOne = document.createElement("h1");
newOne.textContent = "My name is Chisom";
document.body.appendChild(newOne);
newOne.style.color = "green";





// let answer = window.prompt ("TYPE YES, ASS, OR APPLE, THEN CLICK OK.");
// if ( answer === "YES") { alert("You said yes")}
//  else if ( answer === "ASS") { alert( " You said ass")} 
//  else if( answer === "APPLE"){ alert("You said apple")} 
//  else { alert("Get out")};
