function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const divArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    divArray.push(box);
  }

  boxesEl.append(...divArray);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtnEl.addEventListener("click", (event) => {
  const amount = Number(controlsEl.querySelector("input").value);
  createBoxes(amount);
});

destroyBtnEl.addEventListener("click", (event) => {
  destroyBoxes();
});
