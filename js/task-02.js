const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  const elements = [];
  elements.push(newLi);
  ulIngredients.appendChild(...elements);
});
