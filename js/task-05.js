const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const handleTextInput = (event) => {
  if (inputEl.value !== "") {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", handleTextInput);
