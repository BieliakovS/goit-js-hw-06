const inputEl = document.querySelector("#validation-input");

const validSymbolsLength = Number(inputEl.getAttribute("data-length"));

const handleSymbolsValid = (event) => {
  if (event.target.value.length === validSymbolsLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("input", handleSymbolsValid);
