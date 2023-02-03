# Assignment 1

# Task 1

```Javascript
let ul = document.querySelector("ul");
let li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = "<a>Hire me</a>";
let third_li = document.querySelectorAll("ul li");
third_li[2].innerText = "Projects";
```

# Task 2

```Javascript
let searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";
```

# Task 3

```Javascript
let para = document.querySelectorAll(".hero-left-section p span");
para[1].innerText = "an employee";
para[2].innerText = "iNeuron Intelligence PvtLtd";
```

# Task 4

```Javascript
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
```

# Task 5

```Javascript
//todo Task 5
let btnDiv = document.querySelector(".hero-right-section-btns");
let button = document.createElement("button");
btnDiv.appendChild(button);
button.textContent = "Support Me";
```

# Assignment 2

```Javascript
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
```

# Assingment 3

```Javascript
let enterName = document.querySelector(".enterName");
enterName.placeholder = "FSJS 2.O";

let enterMail = document.querySelector(".enterMail");
enterMail.placeholder = "fsjs@ineuron.ai";

let enterMessage = document.querySelector(".enterMessage");
enterMessage.placeholder = "Hello World";

let userName = document.querySelector(".userName");
userName.placeholder = "FSJS 2.O";

let userEmail = document.querySelector(".userEmail");
userEmail.placeholder = "fsjs@ineuron.ai";

let userMessage = document.querySelector(".userMessage");
userMessage.placeholder = "Hello World";
```

# Assingment 4

```Javascript
let barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "yellow";

let archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "purple";

let giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "orange";

let goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "green";

let wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.backgroundColor = "blue";
```

# Assingment 5

```Javascript
// todo create new button
let navCenter = document.querySelector(".nav-center");
let lastChild = navCenter.lastElementChild;
console.log(lastChild);

let button = document.createElement("a");
lastChild.appendChild(button);
button.className = "btn";
button.textContent = "Pro Subsciption";

// todo creating 6th card

let recipeGallery = document.querySelector(".recipe-gallery");
let div = document.createElement("div");
recipeGallery.appendChild(div);
div.className = "card";
let atag = document.createElement("a");
div.appendChild(atag);
atag.href = "#";
atag.className = "recipe-text";
let img = document.createElement("img");
atag.appendChild(img);
img.src = "./img/recipe-6.jpg";
img.className = "recipe-img";
let h5 = document.createElement("h5");
atag.appendChild(h5);
h5.className = "recipe-name";
h5.textContent = "fried chicken";
let para = document.createElement("p");
atag.appendChild(para);
para.className = "recipe-disp";
para.textContent = "Prep : 20min | Cook : 30min";

// todo add items to tags container

let tagsContainer = document.querySelector(".tags-container div");
let a = document.createElement("a");
tagsContainer.appendChild(a);
a.href = "#";
a.textContent = "Chinese (7)";
```

# Assignment 6

```Javascript
let logo = document.querySelector(".logo");
logo.src = "./assets/ineuron-logo.png";

let appPrice = document.querySelector(".app_price span");
appPrice.innerText = "$10";
```

# Assignment 7

```Javascript
let arr = document.querySelector(".main__languages").children;
let [span, br, ...rest] = arr;
// console.log(rest);

for (let i = 1; i < arr.length; i++) {
  arr[i].remove();
}

let input = (document.querySelector(".main__form-input").value = "iNeuron");
let submitForm = document.querySelector(".main__form-btn");
submitForm.submit();

```

# Assignment 8

```Javascript
let aside = document.querySelector(".col-lg-4");

let hr = document.createElement("hr");
aside.appendChild(hr);
hr.className = "hr-line";

let h2 = document.createElement("h2");
aside.appendChild(h2);
h2.className = "hr-line";
h2.textContent = "This is my custom heading";
```

# Assignment 9

```Javascript
let title = document.querySelector(".caption .title");
title.style.color = "red";

let btn = document.querySelector(".add-to-cart");
btn.style.backgroundColor = "red";

```
