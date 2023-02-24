function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const handleChangeColorSubmit = (event) => {
  const getCoor = getRandomHexColor();
  colorEl.textContent = `${getCoor}`;
  bodyEl.style.backgroundColor = `${getCoor}`;
};

changeColorEl.addEventListener("click", handleChangeColorSubmit);
