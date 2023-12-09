const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = [];
const ulIngredients = document.getElementById('ingredients');
ingredients.forEach((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  elements.push(newLi);
  });
ulIngredients.append(...elements);