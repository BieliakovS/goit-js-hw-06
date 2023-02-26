const inpuEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${(Number(inpuEl.max) + Number(inpuEl.min)) / 2}px`;

const handleInputChange = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};

inpuEl.addEventListener("input", handleInputChange);
