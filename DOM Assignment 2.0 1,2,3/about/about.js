let accordianWrapper = document.querySelector(".accordian-wrapper");
let accordianDiv = document.querySelector(".accordian");
let div = document.createElement("div");
accordianWrapper.appendChild(div);
div.className = "accordian";
let h3 = document.createElement("h3");
div.appendChild(h3);
h3.innerText = "skills";
let para = document.createElement("p");
div.appendChild(para);
para.textContent =
  "I possess a very good command over the full stack development technologies like MERN which can be seen in my work over the Github.";

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
