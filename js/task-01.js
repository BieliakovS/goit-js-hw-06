const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesEl.children.length}

Category: ${categoriesEl.children[0].firstElementChild.textContent}
Elements: ${categoriesEl.children[0].lastElementChild.children.length}

Category: ${categoriesEl.children[1].firstElementChild.textContent}
Elements: ${categoriesEl.children[1].lastElementChild.children.length}

Category: ${categoriesEl.children[2].firstElementChild.textContent}
Elements: ${categoriesEl.children[2].lastElementChild.children.length}`);
