// get the element
const spanElement1 = document.getElementById("num1");
const spanElement2 = document.getElementById("num2");

// element --- property
const n1 = parseInt(spanElement1.textContent);
const n2 = parseInt(spanElement2.textContent);
console.log(typeof n1);
// var num1 = parseInt(document.getElementById("n1").textContent);

//process
var c = num1 + num2;

//display
document.write(c);
