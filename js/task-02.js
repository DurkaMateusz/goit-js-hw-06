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
  ulIngredients.appendChild(newLi);
});