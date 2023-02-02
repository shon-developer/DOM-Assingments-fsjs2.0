// let arr = document.querySelector(".main__languages a").children;
// for (let i = 0; i < arr.length; i++) {
//   arr[i].remove();
// }

let arr = document.querySelector(".main__languages").children;
let [span, br, ...rest] = arr;
// console.log(rest);

for (let i = 1; i < arr.length; i++) {
  arr[i].remove();
}

let input = (document.querySelector(".main__form-input").value = "iNeuron");
let submitForm = document.querySelector(".main__form-btn");
submitForm.submit();
