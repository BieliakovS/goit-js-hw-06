const categoriesEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesEl.length}`);

for (let i = 0; i < categoriesEl.length; i += 1) {
  console.log(`Category: ${categoriesEl[i].firstElementChild.textContent}
    Elements: ${categoriesEl[i].lastElementChild.children.length}`);
}
