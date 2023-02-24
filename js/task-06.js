const inputEl = document.querySelector("#validation-input");

const validSymbolsLength = Number(inputEl.getAttribute("data-length"));

const handeleSymbolsValid = (event) => {
  if (
    event.target.value.length === 0 ||
    event.target.value.length > validSymbolsLength
  ) {
    inputEl.classList.replace("valid", "invalid");
    inputEl.classList.remove("valid");
  } else if (event.target.value.length <= validSymbolsLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
};

inputEl.addEventListener("input", handeleSymbolsValid);
