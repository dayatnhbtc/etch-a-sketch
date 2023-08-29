const container = document.querySelector(".container");
const size = document.querySelector(".size");
const reset = document.querySelector(".reset");
let userInput = 64;

size.addEventListener("click", () => {
  userInput = prompt("size :");
  removeChildren();
  for (let i = 0; i < userInput * userInput; i++) {
    container.appendChild(makeChild(userInput));
  }
  hoverIt();
});

reset.addEventListener("click", () => {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = "white";
  }
});

function removeChildren() {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    container.removeChild(children[i]);
  }
}

function makeChild(userInput) {
  const child = document.createElement("div");
  let blockSize = 100 / userInput;
  child.className = "block";
  child.style.width = `${blockSize}%`;
  child.style.height = `${blockSize}%`;
  return child;
}

for (let i = 0; i < userInput * userInput; i++) {
  container.appendChild(makeChild(userInput));
}
hoverIt();

function hoverIt() {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}
