let aside = document.querySelector(".col-lg-4");

let hr = document.createElement("hr");
aside.appendChild(hr);
hr.className = "hr-line";

let h2 = document.createElement("h2");
aside.appendChild(h2);
h2.className = "hr-line";
h2.textContent = "This is my custom heading";

let bars = document.querySelector(".navbar-toggler-icon");
let menu = document.querySelector("#navbarTogglerDemo01");
bars.addEventListener("click", () => {
  menu.style.display = "block";
});
