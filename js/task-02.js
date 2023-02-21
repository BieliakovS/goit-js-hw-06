const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

let ingredientsItemArray = [];

ingredients.forEach(function (ingredient) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = `${ingredient}`;
  newIngredient.classList.add("item");

  ingredientsItemArray.push(newIngredient);
});

ingredientsEl.append(...ingredientsItemArray);
