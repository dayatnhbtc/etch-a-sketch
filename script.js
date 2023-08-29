const container = document.querySelector(".container");
const size = document.querySelector(".size");
const black = document.querySelector(".black");
const reset = document.querySelector(".reset");
const rainbow = document.querySelector(".rainbow");
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
  for (let i = 0; i < userInput * userInput; i++) {
    container.appendChild(makeChild(userInput));
  }
  hoverIt("white");
});

black.addEventListener("click", () => {
  hoverIt("black");
});

black.addEventListener("click", () => {
  hoverIt("black");
});

rainbow.addEventListener("click", () => {
  hoverItR();
});

// reset.addEventListener("click", () => {
//   const children = document.querySelectorAll(".block");
//   for (let i = 0; i < children.length; i++) {
//     children[i].style.backgroundColor = "white";
//   }
// });

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
hoverIt("black");

function hoverIt(color) {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = color;
    });
  }
}

function hoverIt(color) {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = color;
    });
  }
}

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "brown",
  "grey",
  "black",
  "white",
  "silver",
  "gold",
  "teal",
  "navy",
];

function hoverItR() {
  const children = document.querySelectorAll(".block");
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });
  }
}
