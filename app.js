const textOutput = document.querySelector(".box-body h1");
const input = document.querySelector(".input");

input.addEventListener("keyup", () => {
    let count = input.value.length;
    textOutput.innerHTML = count;
});
