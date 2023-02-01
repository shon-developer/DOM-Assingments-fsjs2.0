//todo Task1

let ul = document.querySelector("ul");
let li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = "<a>Hire Me</a>";

let third_li = document.querySelectorAll("ul li");
third_li[2].innerText = "Projects";

//todo Task 2
let searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";

//todo Task 3
let para = document.querySelectorAll(".hero-left-section p span");
para[1].innerText = "an employee";
para[2].innerText = "iNeuron Intelligence PvtLtd";

//todo Task 4
let img = document.querySelector(".hero-right-section img");
img.src = "./shon.PNG";

//todo Task 5
let btnDiv = document.querySelector(".hero-right-section-btns");
let button = document.createElement("button");
btnDiv.appendChild(button);
button.textContent = "Support Me";
