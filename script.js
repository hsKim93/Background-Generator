let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelector(".direction");
let body = document.getElementById("gradient");

h3.textContent = body.style.background = "linear-gradient(to right, rgb(0, 255, 0),"
+ " rgb(255, 0, 0));";
// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient () {
    body.style.background = "linear-gradient(" + 
    direction.value + ", " +
    color1.value + ", " +
    color2.value + ")";
    setText();
}

function setText () {
    h3.textContent = body.style.background + ";"
}

direction.addEventListener("change", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);