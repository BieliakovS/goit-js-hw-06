const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

let counterValue = 0;

counterEl.firstElementChild.addEventListener("click", () => {
  valueEl.textContent = `${(counterValue -= 1)}`;
});

counterEl.lastElementChild.addEventListener("click", () => {
  valueEl.textContent = `${(counterValue += 1)}`;
});
