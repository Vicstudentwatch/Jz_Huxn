// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const red = document.getElementsByTagName("h4")
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const green = document.getElementsByClassName("green");
const blue = document.getElementById("blue");
const yellow = document.querySelector("#yellow");
const teal = document.querySelectorAll(".teal");

console.log(red);
console.log(green);
console.log(blue);
console.log(yellow);
console.log(teal);  
