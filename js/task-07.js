const inpuEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const handleInputChange = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};

inpuEl.addEventListener("input", handleInputChange);
